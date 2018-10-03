import React, { Component } from 'react';
import { MainFeed, Login, Camera, Profile, Register, Home } from './components/screens';
import { SwitchNavigator, TabNavigator, StackNavigator } from 'react-navigation';

const Tabs = SwitchNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
});

const IntroStack = SwitchNavigator({
    home: Home,
    register: Register,
    login: Login

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