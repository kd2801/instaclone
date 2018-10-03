import React, { Component } from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

class Story extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Image
                style={styles.storyContainer}
                source={{
                    uri: 'https://lh3.googleusercontent.com/8nBV5gaDOYVeu94aun7PaTpn1Tk0B5FwwNyOcNM83-yHaH-_YarsEbwUULNSk8GBktpr6eZx3QbTVzVimZbk1Q0GVLw'
                }}/>
        )
    }
}

const styles = StyleSheet.create({
    storyContainer: {
        borderWidth: 2,
        height: 60,
        width: 60,
        borderRadius: 30,
        marginHorizontal: 7,
        margin: 15,
        borderColor: '#fdf497',
    }

});

export default Story;