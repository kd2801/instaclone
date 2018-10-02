import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            credentials: {
                login: "",
                password: ""
            }
        }
    }

    updateText(text, field) {
        let newCredentials = { ...this.state.credentials }
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        });
    }

    register() {
        alert(JSON.stringify(this.state.credentials));
        // this.props.navigation.navigate('login');
    }

    render() {
        return (
            <View
                style={{
                    height: 100 + '%',
                    width: 100 + '%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text>Register Page</Text>
                <TextInput
                    value={this.state.credentials.login}
                    onChangeText={(text) => this.updateText(text, 'login')}
                    placeholder="Username"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    value={this.state.credentials.password}
                    onChangeText={(text) => this.updateText(text, 'password')}
                    secureTextEntry={true}
                    autoCorrect={false}
                    placeholder="Password"
                    style={styles.input} />
                <Button
                    title="Register"
                    onPress={() => this.register() }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + '%',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'rgb(255,255,255)'
    }
});

export default Register;