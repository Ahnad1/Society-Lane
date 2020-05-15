import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, Button } from 'react-native';
import { Constants } from 'expo';
 
class Comingsoon extends React.Component {
 state={
   search: ''
 }
 render() {
   
return (
<View style={styles.container}>

<Text style={styles.message}>
Coming Soon!
</Text>
<View style={styles.bar}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Shop')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Go Back
</Text>
</View>
</TouchableHighlight>
</View>
</View>
);
}
}
 
const styles = StyleSheet.create({
container: {
flex: 1,
 
alignItems: 'center',
justifyContent: 'center',
},
 
bar:{
 flexDirection: 'row',
},
title:{
 fontSize:55,
color:'red',
fontFamily:'Playfair Display SC',
},
message:{
  fontSize:19,
  color: 'red',
  fontFamily:'Playfair Display SC',
},

searchBar:{
height:30,
width:175,
fontSize: 16,
color:'black',
 
borderWidth:1,
margin: 10,
},
welcomeButton:{
backgroundColor:'lightblue',
width:100,
height:50,
justifyContent:'center',
alignItems:'center',
}

});

export default Comingsoon;
