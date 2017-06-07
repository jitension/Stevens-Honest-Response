import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'


// Action is been used to navigate between the route components(screens)
import { Actions } from 'react-native-router-flux'

// To get the width and height of the device in which application is running
const { width, height } = Dimensions.get("window");


// fetching the static content like images, logo, etc
const background = require("../static/images/signup_bg.png");
const backIcon = require("../static/images/back.png");
const personIcon = require("../static/images/signup_person.png");
const lockIcon = require("../static/images/signup_lock.png");
const emailIcon = require("../static/images/signup_email.png");
const birthdayIcon = require("../static/images/signup_birthday.png");


export default class SignupVriew extends Component {
  // the first method which runs upon DOM creation
  constructor() {
    super();
    // declare states of the application
    this.state = {
    }

    Keyboard.dismiss();
  }
  render() {
    return (
      <View style={[styles.container, styles.background]} resizeMode="cover">
        <Image
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>

              {/* Back button */}
              <TouchableOpacity
                onPress={Actions.login}
                style={styles.headerBackButtonView}>
                <Image
                  source={backIcon}
                  style={styles.backButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>

              {/* First Name input text box */}
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="First Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                returnKeyType={"next"}
                returnKeyLabel={"Next"}
                onSubmitEditing={(event) => {
                  this.refs.LastName.focus();
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>

              {/* Last Name input text box */}
              <TextInput
                ref='LastName'
                style={[styles.input, styles.whiteFont]}
                placeholder="Last Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                returnKeyType={"next"}
                returnKeyLabel={"Next"}
                onSubmitEditing={(event) => {
                  this.refs.Email.focus();
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={emailIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>

              {/* Email input text box */}
              <TextInput
                ref="Email"
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                keyboardType="email-address"
                returnKeyType={"next"}
                returnKeyLabel={"Next"}
                onSubmitEditing={(event) => {
                  this.refs.Password.focus();
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={lockIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>

              {/*Password input text box */}
              <TextInput
                ref="Password"
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                returnKeyType={"next"}
                returnKeyLabel={"Next"}
                onSubmitEditing={(event) => {
                  this.refs.GradYear.focus();
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={birthdayIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>

              {/* Graduation start date input text box */}
              <TextInput
                ref="GradYear"
                style={[styles.input, styles.whiteFont]}
                placeholder="Graduation started on"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                keyboardType="phone-pad"
                maxLength={4}
                returnKeyType="done"
                returnKeyLabel={"Done"}
              />
            </View>

          </View>

          <View style={styles.footerContainer}>

            {/* Sign up button */}
            <TouchableOpacity>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Join</Text>
              </View>
            </TouchableOpacity>

            {/* Sign in button */}
            <TouchableOpacity onPress={Actions.login}>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

// Wrapper for styling the objects
let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  background: {
    width,
    height,
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
