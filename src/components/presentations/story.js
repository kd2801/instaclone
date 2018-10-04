import React, { Component } from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

class Story extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={{margin: 5, position: 'relative'}}>
                <Image
                    style={styles.storyContainer}
                    source={{
                        uri: 'https://lh3.googleusercontent.com/8nBV5gaDOYVeu94aun7PaTpn1Tk0B5FwwNyOcNM83-yHaH-_YarsEbwUULNSk8GBktpr6eZx3QbTVzVimZbk1Q0GVLw'
                    }}/>
                <View style={styles.blueBubble}>
                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 10, fontWeight: '600'}}>+</Text>
                </View>
                <Text style={{fontSize: 10, alignSelf: 'center', marginTop: -10}}>keshav</Text>
            </View>
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
    },
    blueBubble: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: '#3897f0',
        position: 'absolute',
        top: 55,
        right: 10,
        borderColor: '#fff',
        borderWidth: 1
    }

});

export default Story;