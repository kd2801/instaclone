import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config/index';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            screenWidth: 0,
            liked: false
        }
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        });
    }

    goToGenre() {
        this.props.navigation.navigate('camera');
    }

    componentDidMount() {
        this.setState({
            screenWidth: Dimensions.get("window").width
        })
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageUri = 'https://lh3.googleusercontent.com/12NPz7hLIH04bXLmEBy5DozOFcdOVZMmVPupIf8LCsNcGhh1jU8Iw5vg1oPZysjXjCaKcICN3gm6N_od963_lriPLw'
            + '=s' + imageHeight + '-c';
        const heartIconColor = this.state.liked ? 'rgb(252, 61, 57)': null;

        return (
            <View style={{flexDirection: 'column', flex: 1, width: 100 + '%'}}>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.userPicture}
                            source={{
                                uri: 'https://lh3.googleusercontent.com/8nBV5gaDOYVeu94aun7PaTpn1Tk0B5FwwNyOcNM83-yHaH-_YarsEbwUULNSk8GBktpr6eZx3QbTVzVimZbk1Q0GVLw'
                            }}/>
                        <Text style={{ marginLeft: 10 }}>Keshav Dhawan</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.goToGenre()}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.likeToggled() }>
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}
                        source={config.images.heartIcon} />
                    <Image
                        style={[styles.icon, { height: 32, width: 36 }]}
                        source={config.images.messageIcon} />
                    <Image
                        resizeMode="stretch"
                        style={[styles.icon, { height: 40, width: 40 }]}
                        source={config.images.shareIcon} />
                </View>
                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { height: 30, width: 30 }]}
                        source={config.images.heartIcon} />
                    <Text>128 Likes</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',

    },
    userPicture: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: 'rgb(233, 233, 233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 5
    }
});

export default Post;