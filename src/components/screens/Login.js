import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import config from '../../config/index';

class Login extends Component {

    login() {
        this.props.navigation.navigate("main");
    }

    render() {
        return (
            <View
                style={{
                    height: 100 + '%',
                    width: 100 + '%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <View style={{
                    width: 90 + '%',
                    }}>
                    <Image style={{position: 'absolute', top: 50 + '%', marginTop: -150, width: 200, height: 67, alignSelf: 'center'}} source={config.images.logo} />
                    <TextInput
                        style={styles.inputField}
                        placeHolderStyle={styles.placeholder}
                        placeholder="Phone number, email or username" />
                    <TextInput
                        style={styles.inputField}
                        secureTextEntry={true}
                        placeHolderStyle={styles.placeholder}
                        placeholder="Password" />
                    <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
                        <Text style={{ color: 'rgb(255,255,255)', fontWeight: '600'}}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.forgotText}>Forgot your login details? <Text style={{color: '#000', fontWeight: '600'}}>Get help signing in.</Text></Text>
                <View style={{flexDirection: 'row', marginTop: 15, width: 90 + '%'}}>
                    <View style={{backgroundColor: '#ccc', height: 1, flex: 1, alignSelf: 'center'}} />
                    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 12, color: '#ccc', fontWeight: '600' }}>OR</Text>
                    <View style={{backgroundColor: '#ccc', height: 1, flex: 1, alignSelf: 'center'}} />
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{color: '#3897f0', fontWeight: '700'}}>Log in with Facebook</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputField: {
        justifyContent: "center",
        alignItems: "stretch",
        height: 36,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 12,
        marginBottom: 18,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.02)'
    },
    loginBtn: {
        lineHeight: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#3897f0',
        height: 36,
        backgroundColor: '#3897f0',
    },
    forgotText: {
        color: '#ccc',
        marginTop: 15,
        fontSize: 10
    },
    orView: {
        marginTop: 15
    },
    placeholder: {
        fontWeight: '600',
        color: '#ccc'
    }

});

export default Login;