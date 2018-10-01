import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Login extends Component {

    login() {
        this.props.navigation.navigate("main");
    }

    render() {
        return (
            <TouchableOpacity
                style={{
                    height: 100 + '%',
                    width: 100 + '%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={ () => this.login() }>
                <Text>Login Page</Text>
            </TouchableOpacity>
        )
    }
}

export default Login;