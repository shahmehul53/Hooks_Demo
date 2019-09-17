import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Example01 from './Example01';
import Example02 from './Example02';
import Example03 from './Example02';
import FirstScreen from './FirstScreen';
import Example04 from './Example04';

const AppNavigator = createStackNavigator({
    First:{
        screen: FirstScreen,
        navigationOptions:{
            title: "First Screen"
        }
    },
    Example1: {
      screen: Example01,
      navigationOptions:{
        title: 'Simple Pattern',
      }
    },
    Example2: {
      screen: Example02,
      navigationOptions:{
        title: 'Action Object',
      }
    },
    Example3: {
        screen: Example03,
        navigationOptions:{
          title: 'Multiple useReducers',
        }
      },
      Example4: {
        screen: Example04,
        navigationOptions:{
          title: 'Context',
        }
      },
  });

  export default createAppContainer(AppNavigator);

  