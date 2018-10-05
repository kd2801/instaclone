import React, { Component } from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PopupDialog from 'react-native-popup-dialog';

class FeedPopup extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <PopupDialog
                style={{maxHeight: 99 + '%'}}
                width={0.75}
                height={0.55}
                ref={(popupDialog) => { this.props.openPopup = popupDialog; }}>
                <View>
                    <FlatList
                        data={[
                            {key: 'Share Link'},
                            {key: 'Share on WhatsApp'},
                            {key: 'Share on Messenger'},
                            {key: 'Copy Link'},
                            {key: 'Report...'},
                            {key: 'Turn On Post Notifications'},
                            {key: 'Unfollow'},
                            {key: 'Mute'},
                        ]}
                        renderItem={({item}) =>
                            <TouchableOpacity>
                                <Text style={styles.item}>{item.key}</Text>
                            </TouchableOpacity>}
                    />
                </View>
            </PopupDialog>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 14,
        height: 44,
        marginLeft: 5
    }
});

export default FeedPopup;