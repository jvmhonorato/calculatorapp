import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TextInputComponent } from 'react-native';

export default function App() {
 

  //states
  const [display, setDisplay] = useState('')
  const [result, setResult]= useState('')
  //Arrays
  const col1Buttons = [
    ['7','8','9'],
    ['4','5','6'],
    ['1','2','3'],
    [',','0','=']
  ]
  const col2Buttons = ['C','÷','X','-','+']
 
    const handleInput = (op) => {
      if(op === 'C'){
        setDisplay('')
        setResult('')
      }else if(op === '='){
        setResult(display)
        result
      }else{
        setDisplay(
          display + op
          )
      }
     }

    //  const handleInput = (op) => {
    //   if(op === 'C'){
    //     setDisplay({display: ''})
    //   }else{
    //     setDisplay(
    //       display +  op
         
    //     )
    //   }
    //   console.log(op)
    
      
    //  }




  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
       <Text style={styles.result}>{result}</Text>
        <View style={styles.buttons}>
         <View style={styles.col1}>
           {col1Buttons.map((line, index) =>
            <View key={index} style={styles.line}>
       
              {line.map( op =>
               <TouchableOpacity   style={styles.btn} onPress={() => {handleInput(op)}} >
                <Text value={display} key={op} style={styles.btnText}>
                  {op}
                </Text> 
              </TouchableOpacity>)}
             </View>
           )}
         </View>
         <View style={styles.col2}>
           {col2Buttons.map( op =>
             <TouchableOpacity style={styles.btn} onPress={() => {handleInput(op)}} >
              <Text value={result} key={op} style={styles.btnText}>
               {op}
              </Text> 
            </TouchableOpacity>)}
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
