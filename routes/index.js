import React, { Component } from 'react';

// We are using "react-native-router-flux" package for the navigation
import { Scene, Router } from 'react-native-router-flux';

//importing all the screen components from screen folder to create a route of the application
import LoginScreen from "../screens/login/index";
import SignupScreen from "../screens/signup/index";


export default class Routes extends Component {
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