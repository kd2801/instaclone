import React, { Component } from 'react';
import { MainFeed, Login, Camera, Profile } from './components/screens';
import { SwitchNavigator, TabNavigator } from 'react-navigation';


const Tabs = TabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
});

const MainStack = SwitchNavigator({
    login: Login,
    main: MainFeed
});

class InstaClone extends Component {

    render() {

        return (
            <MainStack/>
        )
    }
}

export default InstaClone;