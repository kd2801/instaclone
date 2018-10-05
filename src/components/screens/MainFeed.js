import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl, FlatList, Modal, TouchableOpacity } from 'react-native';
import PostFeed from "../containers/PostFeed";
import Stories from "../containers/Stories";
import FeedPopup from "../popups/FeedPopup";


class MainFeed extends Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isPopupOpen: false
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});

        setTimeout(() => {
            this.setState({refreshing: false});
        }, 3000);
    };

    enablePopup() {
        this.state.isPopupOpen = true;
    }

    render() {
        return (
            <View style={{ flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text onPress={() => this.enablePopup()}>Instagram</Text>
                </View>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }>
                    <Stories/>
                    <PostFeed/>
                </ScrollView>
                <FeedPopup openPopup={this.state.isPopupOpen}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        marginTop: 20,
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomColor: "rgb(233, 233, 233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainFeed;