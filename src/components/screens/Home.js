import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../../config/index';

class HomeScreen extends Component {

    navigateToLoginSignup(screen) {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{position: 'absolute', top: 50 + '%', marginTop: -150, width: 200, height: 67}} source={config.images.logo} />
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerBtnText}>Create New Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.navigateToLoginSignup('login')}
                    style={{ marginTop: 20}}>
                    <Text style={{color: '#3897f0', fontWeight: '700'}}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 100 + '%',
        height: 100 + '%',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)'
    },
    registerButton: {
        marginHorizontal: 7,
        width: 93 + '%',
        backgroundColor: '#3897f0',
        borderRadius: 4,
        color: 'rgb(255,255,255)',
        padding: 10
    },
    registerBtnText: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default HomeScreen;