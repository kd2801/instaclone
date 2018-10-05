import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, RefreshControl } from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import config from '../../config/index';
import Genres from "../containers/Genres";

class Camera extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            refreshing: false
        };
    }

    componentDidMount() {
        let items = Array.apply(null, config.tileImages).map((image, i) => {
            return { id: i, src: image }
        });
        this.setState({ items });
        console.log(this.state);
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

    _onRefresh = () => {
        this.setState({refreshing: true});

        setTimeout(() => {
            this.setState({refreshing: false});
        }, 3000);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.searchContainer, {display: 'flex', alignItems: 'center'}]}>
                    <Text placeholder="Search" style={{width: 100 + '%', marginTop: 7 + '%', marginLeft: 15 + '%', color: '#ccc'}}>Search</Text>
                </View>
                <View style={{width: 100 + '%', height: 15 + '%', paddingTop: 10, paddingBottom: 10}}>
                    <Genres/>
                </View>
                <View style={{width: 100 + '%', height: 75 + '%', marginTop: 5}}>
                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }>
                        <PhotoGrid
                            data = { this.state.items }
                            itemsPerRow = { 2 }
                            itemMargin = { 0.5 }
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
        width: 100 + '%',
        height: 10 + '%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
});

export default Camera;