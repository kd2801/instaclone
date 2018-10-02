import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

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
                    <TextInput
                        style={styles.inputField}
                        placeholder="Phone number, email or username" />
                    <TextInput
                        style={styles.inputField}
                        secureTextEntry={true}
                        placeholder="Password" />
                    <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
                        <Text style={{ textAlign: 'center', color: 'rgb(255,255,255)', fontWeight: '600', flex: 1}}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <Text>Forgot your login details? Get help signing in.</Text>
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
        padding: 10,
        marginBottom: 10,
        borderRadius: 4
    },
    loginBtn: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#3897f0',
        height: 36,
        backgroundColor: '#3897f0',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Login;