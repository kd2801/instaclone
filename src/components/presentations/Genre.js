import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import config from '../../config/index';

class Genre extends Component {
    constructor() {
        super();
        this.state = {
            randomImage: config.tileImages[Math.floor(Math.random() * config.tileImages.length)]
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.genreContainer}>
                    <Image style={{width: 100 + '%', height: 100 + '%', borderRadius: 10, opacity: 0.4}} source={{uri: this.state.randomImage}} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    genreContainer: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'transparent',
        height: 100 + '%',
        width: 120,
        marginLeft: 10
    }

});

export default Genre;