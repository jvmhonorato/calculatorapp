import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Display</Text>
      <Text style={styles.result}>Result</Text>
      <View style={styles.buttons}>
      
      </View>
      
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
  display: {
    flex:1,
    backgroundColor: '#EFEFEF',
    fontSize: 80,
    textAlign:'right',
    paddingTop:30,
    paddingBottom:10
  },
  result:{
    flex:0.3,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign:'right',
    paddingRight:10,
    paddingBottom:10
  },
  buttons:{
    flex:5,
    flexDirection:'row'
  }
});
