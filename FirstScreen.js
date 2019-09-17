import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Example01 from './Example01';
import Example02 from './Example02';



export default class FirstScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
         <Button onPress={() => this.props.navigation.navigate('Example1')} title="Example1"/>
         <Button onPress={()=> this.props.navigation.navigate("Example2")} title="Example2"/>
         <Button onPress={()=> this.props.navigation.navigate("Example3")} title="Example3"/>
         <Button onPress={()=> this.props.navigation.navigate("Example4")} title="Example4"/>
      </View>
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