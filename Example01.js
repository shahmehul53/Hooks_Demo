import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

export default function Example01() {

  const[count,dispatch] = useReducer(reducer,initialState);
  
  useEffect(()=>{
    console.log("Test")
  });

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button onPress={()=> dispatch('increment')} title="Increase"/>
      <Button onPress={()=> dispatch('decrement')} title="Decrease"/>
      <Button onPress={()=> dispatch('reset')} title="reset"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
