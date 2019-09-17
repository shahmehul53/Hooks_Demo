import React, {useState,useEffect,useReducer,useContext} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const CountContext = React.createContext();
const initialState = 0;
const CountProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const contextValue = useContext(CountContext);
  return contextValue;
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      case 'set': return 0;
      default: throw new Error('Unexpected action');
    }
  };

  const Counter = () => {
    const [count, dispatch] = useCount();
    return (
        <View style={styles.container}>
        <Text>{count}</Text>
        <Button onPress={()=> dispatch({ type: 'increment' }) } title="Increase" />
        <Button onPress={()=> dispatch({ type: 'decrement' })} title="Decrease" />
        <Button onPress={()=> dispatch({ type: 'set' })} title="Reset" />
        </View>
    )
  }

export default function Example04() {
  
  useEffect(()=>{
    console.log("Test")
  });

  return (
     <View style={styles.container}>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
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
