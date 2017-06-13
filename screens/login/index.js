import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    Button,
    TouchableOpacity,
    Keyboard  
} from 'react-native';

// Action is been used to navigate between the route components(screens)
import { Actions } from 'react-native-router-flux'

// To get the width and height of the device in which application is running
const { width, height } = Dimensions.get("window");

// fetching the static content like images, logo, etc
const background = require("../static/images/login1_bg.png");
const mark = require("../static/images/hr.png");
const lockIcon = require("../static/images/login1_lock.png");
const personIcon = require("../static/images/login1_person.png");


export default class LoginScreen extends Component {

    // the first method which runs upon DOM creation
    constructor() {
        super();
        // declare states of the application
        this.state = {
        }

        Keyboard.dismiss();
    }

   

    // render HTML content 
    render() {
        return (
            <View style={styles.container}>
                <Image source={background} style={styles.background} resizeMode="cover">

                    {/* App logo */}
                    <View style={styles.markWrap}>
                        <Image source={mark} style={styles.mark} resizeMode="contain" />
                    </View>

                    {/* Mark Icon */}
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                            </View>

                            {/* UserName input text box */}
                            <TextInput
                                placeholder='Username'
                                placeholderTextColor="#FFF"

                                returnKeyType="next"
                                returnKeyLabel="Next"
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                onSubmitEditing={(event) => {
                                    this.refs.Password.focus();
                                }}
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                            </View>

                            {/* Password  input text box */}
                            <TextInput
                                ref='Password'
                                placeholderTextColor="#FFF"
                                placeholder="Password"
                                returnKeyType="done"
                                returnKeyLabel={"Done"}
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                secureTextEntry
                            />
                        </View>

                        {/* Forgot password button */}
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Sign in button */}
                        <TouchableOpacity activeOpacity={.5}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.container}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.accountText}>Don't have an account?</Text>

                            {/* Sign up button */}
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={Actions.register}>
                                <View>
                                    <Text style={styles.signupLinkText}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

// Wrapper for styling the objects
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#FF3366",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    }
});
