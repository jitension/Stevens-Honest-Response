import React, { Component } from 'react';
import {
    BackHandler,
    Alert,
    Navigator
} from 'react-native';

// We are using "react-native-router-flux" package for the navigation
import { Scene, Router, Actions } from 'react-native-router-flux';

//importing all the screen components from screen folder to create a route of the application
import LoginScreen from "../screens/login/index";
import SignupScreen from "../screens/signup/index";


export default class Routes extends Component {
 
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (Actions.login) {
                Alert.alert(
                    "Confirmation",
                    "Are you sure you want to exit?",
                    [
                        { text: 'No', onPress: () => console.log('OK Pressed!') },
                        {
                            text: 'Yes', onPress: () => {
                                BackHandler.exitApp();
                            }
                        }
                    ]
                );
                return true;
            }
        });
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={LoginScreen} initial hideNavBar />
                    <Scene key="register" component={SignupScreen} hideNavBar />
                </Scene>
            </Router>
        )
    }
}