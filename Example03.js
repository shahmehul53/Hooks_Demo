import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: throw new Error('Unexpected action');
  }
};

export default function Example03() {

    const [count1, dispatch1] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
  
  useEffect(()=>{
    console.log("Test")
  });

  return (
    <View style={styles.container}>
      <Text>{count1}</Text>
      <Button onPress={()=> dispatch1('increment')} title="Increase1"/>
      <Button onPress={()=> dispatch1('decrement')} title="Decrease1"/>
      <Button onPress={()=> dispatch1('set')} title="set1"/>
      <Text>{count2}</Text>
      <Button onPress={()=> dispatch2('increment')} title="Increase"/>
      <Button onPress={()=> dispatch2('decrement')} title="Decrease"/>
      <Button onPress={()=> dispatch2('set')} title="set2"/>
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
