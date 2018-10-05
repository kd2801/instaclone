import React, { Component } from 'react';
import { MainFeed, Login, Camera, Profile, Register, Home, AddImage, Following } from './components/screens';
import { SwitchNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import {Image} from 'react-native';
import config from './config/index';

const Tabs = createBottomTabNavigator(
    {
        feed: MainFeed,
        camera: Camera,
        addImage: AddImage,
        following: Following,
        profile: Profile
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;

                if (routeName === 'feed') {
                    iconName = config.images.home;
                } else if (routeName === 'camera') {
                    iconName = config.images.search;
                } else if (routeName === 'addImage') {
                    iconName = config.images.camera;
                } else if (routeName === 'following') {
                    iconName = config.images.heartIcon;
                } else if (routeName === 'profile') {
                    iconName = config.images.profile;
                }
                return <Image style={{width: 25, height: 25}} color={tintColor} source={iconName}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false
        },
        tabStyle: { backgroundColor: 'red', marginRight: 20, width: 100 }
    }

);

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