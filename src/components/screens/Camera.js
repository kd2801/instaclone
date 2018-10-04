import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import config from '../../config/index';
import Genres from "../containers/Genres";

class Camera extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        let items = Array.apply(null, config.tileImages).map((image, i) => {
            return { id: i, src: image }
        });
        this.setState({ items });
    }

    renderItem(item, itemSize, itemPaddingHorizontal) {
        return(
            <TouchableOpacity
                key = { item.id }
                style = {{ width: itemSize, height: itemSize, paddingHorizontal: itemPaddingHorizontal, borderRadius: 4 }}
                onPress = { () => {
                    // Do Something
                }}>
                <Image
                    resizeMode = "cover"
                    style = {{ flex: 1 }}
                    source = {{ uri: item.src }}
                />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={{width: 100 + '%', padding: 5}}/>
                </View>
                <View style={{width: 100 + '%', height: 15 + '%', paddingTop: 10, paddingBottom: 10}}>
                    <Genres/>
                </View>
                <View style={{width: 100 + '%', height: 80 + '%', marginTop: 5}}>
                    <ScrollView>
                        <PhotoGrid
                            data = { this.state.items }
                            itemsPerRow = { 2 }
                            itemMargin = { 1 }
                            itemPaddingHorizontal={1}
                            renderItem = { this.renderItem }
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchContainer: {
        width: 90 + '%',
        height: 5 + '%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginHorizontal: 5
    }
});

export default Camera;