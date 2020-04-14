/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';

import {SocialIcon} from 'react-native-elements';
import {Input} from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconPass from 'react-native-vector-icons/MaterialCommunityIcons';

import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient colors={['#6822a5', '#2b094c']} style={Styles.gradient}>
        <View style={Styles.Icons}>
          <TouchableOpacity>
            <Icons name="left" color={'white'} size={25} />
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 50,
              fontSize: 18,
              color: 'white',
            }}>
            {' '}
            Sign In
          </Text>
        </View>
        <View style={Styles.SocialIcon}>
          <SocialIcon
            style={Styles.SocialIconShadow}
            type="facebook"
            onPress={() => {
              alert('facebook');
            }}
          />
          <SocialIcon
            style={Styles.SocialIconShadow}
            type="twitter"
            onPress={() => {
              alert('twitter');
            }}
          />
          <SocialIcon
            style={Styles.SocialIconShadow}
            type="google-plus-official"
            onPress={() => {
              alert('google');
            }}
          />
        </View>
        <View style={Styles.SecText}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            or be classical
          </Text>
        </View>

        <View style={Styles.EmailInput}>
          <Input
            placeholder="Email"
            rightIcon={
              <IconEmail name="email-outline" size={21} color="white" />
            }
          />
          <Input
            placeholder="Password"
            rightIcon={<IconPass name="eye-outline" size={21} color="white" />}
          />
          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              paddingRight: 6,
              paddingTop: 6,
            }}>
            Forget your password ?
          </Text>
          <View style={Styles.Button}>
            <Button title="SIGN IN" color="#9c26b0" />
          </View>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: 18,
            }}>
            Don't have an account? Sign up
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  centerd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
  },
  backIcon: {},
  Icons: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 30,
  },
  SocialIcon: {
    paddingTop: 40,
    paddingLeft: 70,
    paddingRight: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SocialIconShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 14,
  },
  SecText: {
    flex: 1 / 6,
    justifyContent: 'center',
  },
  EmailInput: {
    flex: 1 / 3,
    color: 'white',
    paddingLeft: 21,
    paddingRight: 21,
  },
  Button: {
    paddingTop: 27,
    paddingLeft: 10,
  },
});

export default App;
