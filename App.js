import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //Arrays
  const col1Buttons = [
    ['7','8','9'],
    ['4','5','6'],
    ['1','2','3'],
    [',','0','=']
  ]
  const col2Buttons = ['C','÷','X','-','+']


  return (
    <View style={styles.container}>
      <Text style={styles.display}>Display</Text>
       <Text style={styles.result}>Result</Text>
        <View style={styles.buttons}>
         <View style={styles.col1}>
           {col1Buttons.map((line, index) =>
            <View key={index} style={styles.line}>
       
              {line.map( op =>
               <View style={styles.btn}>
                <Text key={op} style={styles.btnText}>
                  {op}
                </Text> 
              </View>)}
             </View>
           )}
         </View>
         <View style={styles.col2}>
           {col2Buttons.map( op =>
             <View style={styles.btn}>
              <Text key={op} style={styles.btnText}>
               {op}
              </Text> 
            </View>)}
         </View>
      
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
    fontSize: 30,
    textAlign:'right',
    paddingRight:10,
    paddingBottom:10
  },
  buttons:{
    flex:5,
    flexDirection:'row'
  },
  col1:{
    flex:3,
    backgroundColor:'grey'
  },
  line: {
    flex:1,
    flexDirection: 'row'
  },
  btn:{
    flex:1,
    justifyContent:'center'
  
  },
  btnText: {
    textAlign:'center',
    fontSize:50
  },
  col2:{
    flex:1,
    backgroundColor:'red'
  }
});
