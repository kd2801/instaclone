import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../../config/index';
import PhotoGrid from 'react-native-image-grid';

class Profile extends Component {
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
        this.setState({items});
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
            <View style={styles.profileContainer}>
                <View style={{width: 100 + '%', height: 7 + '%', borderBottomWidth: 1, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{marginHorizontal: 10, color: '#4a4a4a', fontWeight: '600'}}>keshav_dhawan</Text>
                    <Text style={{marginHorizontal: 10}}>keshav_dhawan</Text>
                </View>
                <View style={{height: 93 + '%', width: 100 + '%'}}>
                    <View style={styles.topContainer}>
                        <View style={{width: 30 + '%', height: 100 + '%', justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 85, height: 85, borderWidth: 1, borderRadius: 40}} source={{uri:  config.tileImages[0]}} />

                            <Text style={{marginTop: 10, fontWeight: '600', color: '#4a4a4a'}}>Keshav Dhawan</Text>
                        </View>
                        <View style={{width: 70 + '%', height: 100 + '%', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: 86 + '%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginHorizontal: 2 + '%'}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 18, color: '#4a4a4a'}}>26</Text>
                                    <Text style={{textAlign: 'center', fontSize: 16, color: '#ccc'}}>posts</Text>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 18, color: '#4a4a4a'}}>115</Text>
                                    <Text style={{textAlign: 'center', fontSize: 16, color: '#ccc'}}>followers</Text>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 18, color: '#4a4a4a'}}>162</Text>
                                    <Text style={{textAlign: 'center', fontSize: 16, color: '#ccc'}}>following</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{width: 90 + '%', height: 30, borderWidth: 1, borderRadius: 5, borderColor: '#ccc'}}>
                                <Text style={{textAlign: 'center', justifyContent: 'center', lineHeight: 24, fontWeight: '500', color: '#4a4a4a'}}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.middleContainer}>
                        <View style={{width: 33.33 + '%', alignItems: 'center'}}>
                            <Image style={{height: 20, width: 20}} source={config.images.profile} />
                        </View>
                        <View style={{width: 33.33 + '%', alignItems: 'center'}}>
                            <Image style={{height: 20, width: 20}} source={config.images.profile} />
                        </View>
                        <View style={{width: 33.33 + '%', alignItems: 'center'}}>
                            <Image style={{height: 20, width: 20}} source={config.images.profile} />
                        </View>
                    </View>
                    <View style={styles.gridContainer}>
                        <PhotoGrid
                            data = { this.state.items }
                            itemsPerRow = { 3 }
                            itemMargin = { 0.5 }
                            itemPaddingHorizontal={1}
                            renderItem = { this.renderItem }
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        width: 100 + '%',
        height: 100 + '%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    topContainer: {
        height: 23 + '%',
        width: 100 + '%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    middleContainer: {
        height: 7 + '%',
        width: 100 + '%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
    gridContainer: {
        height: 75 + '%',
        width: 100 + '%',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
});

export default Profile;