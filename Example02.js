import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const initialState = {
  count1: 0,
  count2: 0
};
const reducer = (state, action) => {
  switch (action) {
    case 'increment1':
      return { ...state, count1: state.count1 + 1 };
    case 'decrement1':
      return { ...state, count1: state.count1 - 1 };
    case 'set1':
      return { ...state, count1: 10 };
    case 'increment2':
      return { ...state, count2: state.count2 + 1 };
    case 'decrement2':
      return { ...state, count2: state.count2 - 1 };
    case 'set2':
      return { ...state, count2: 20 };
      default: 
      throw new Error('Unexpected action');
  }
};

export default function Example02() {

  const[state,dispatch] = useReducer(reducer,initialState);
  
  useEffect(()=>{
    console.log("Test")
  });

  return (
    <View style={styles.container}>
      <Text>{state.count1}</Text>
      <Button onPress={()=> dispatch('increment1')} title="Increase1"/>
      <Button onPress={()=> dispatch('decrement1')} title="Decrease1"/>
      <Button onPress={()=> dispatch('set1')} title="set1"/>
      <Text>{state.count2}</Text>
      <Button onPress={()=> dispatch('increment2')} title="Increase"/>
      <Button onPress={()=> dispatch('decrement2')} title="Decrease"/>
      <Button onPress={()=> dispatch('set2')} title="set2"/>
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
