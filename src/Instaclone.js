import React, { Component } from 'react';
import { MainFeed, Login, Camera, Profile, Register, Home } from './components/screens';
import { SwitchNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
});

const IntroStack = SwitchNavigator({
    home: Home,
    register: Register,
    login: Login,
    camera: Camera
});

const MainStack = SwitchNavigator({
    intro: IntroStack,
    main: Tabs
});

class InstaClone extends Component {

    render() {
        return (
            <MainStack/>
        )
    }
}

export default InstaClone;