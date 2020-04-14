import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../Globals/colors';
import {Checkbox} from 'react-native-paper';
import {login, register} from '../../Services/services';
import Messages from '../AlertMessages';

export default class Register extends Component {
  state = {
    fullname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    securityPassword: '',
    referralUsername: '',
    checked: false,
  };

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.gradient}>
          <View style={Styles.InputView}>
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({fullname: text});
              }}
              value={this.state.fullname}
              placeholder={'Fullname'}
            />
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({username: text});
              }}
              value={this.state.username}
              placeholder={'Username'}
            />
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({email: text});
              }}
              value={this.state.email}
              placeholder={'Email'}
            />
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({phone: text});
              }}
              value={this.state.phone}
              placeholder={'Phone'}
            />
            <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({password: text});
              }}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={'Password'}
            />
            <TextInput
              style={Styles.inputPassword}
              onChangeText={text => {
                this.setState({securityPassword: text});
              }}
              secureTextEntry={true}
              value={this.state.securityPassword}
              placeholder={'Password Security'}
            />
            <TextInput
              style={Styles.inputUser}
              onChangeText={text => {
                this.setState({referralUsername: text});
              }}
              value={this.state.referralUsername}
              placeholder={'Referral Username (sponsor)'}
            />
            <View style={Styles.ForgotPassView}>
              <Checkbox
                status={this.state.checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({checked: !this.state.checked});
                }}
                color={White}
              />
              <Text style={Styles.ForgotPassText}>
                Accept the terms and conditions.
              </Text>
            </View>
          </View>
          <View style={Styles.ButtonView}>
            <TouchableOpacity
              style={Styles.LoginButton}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={Styles.buttonTxt}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.RegisterButton}
              onPress={async () => {
                const {
                  fullname,
                  username,
                  email,
                  phone,
                  password,
                  securityPassword,
                  referralUsername,
                  checked,
                } = this.state;
                let response = await register(
                  fullname,
                  username,
                  email,
                  phone,
                  password,
                  securityPassword,
                  referralUsername,
                  checked,
                );
                if (response.userName && response.email) {
                  await login(username, password);
                  this.props.navigation.navigate('Home');
                }
              }}>
              <Text style={Styles.buttonTxt2}>Register</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  InputView: {
    marginTop: responsiveHeight(7),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUser: {
    marginTop: responsiveHeight(2),
    width: '80%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: '2%',
  },
  inputPassword: {
    marginTop: responsiveHeight(2),
    width: '80%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: '2%',
  },
  ForgotPassView: {
    width: '80%',
    alignSelf: 'center',
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
  },
  ForgotPassText: {
    fontSize: responsiveFontSize(1.8),
    color: TextColor,
  },
  ButtonView: {
    width: '70%',
    height: responsiveHeight(15),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LoginButton: {
    width: '45%',
    height: responsiveHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 2,
    borderColor: LightBackground,
  },
  RegisterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(7),
    width: '45%',
    borderRadius: 100,
    backgroundColor: White,
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: White,
  },
  buttonTxt2: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: TextColor,
  },
});
