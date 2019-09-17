import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Example01 from './Example01';
import Example02 from './Example02';
import AppNavigator from './Routes'
import FirstScreen from './FirstScreen';





export default class App extends React.Component {
  render(){
    return (
      // <View style={styles.container}>
        <AppNavigator />
        
      // </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
