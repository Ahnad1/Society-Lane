import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Discount extends React.Component {


  render() {
     
    return (
     
          <View style={styles.container}>
<Image source ={{uri: 'https://codehs.com/uploads/9b329bc770d8f5032a24e231b9c018d1'}}
 style={{ height: 40, width: 40, justifyContent: 'center', margin: 40, alignContent: 'center' }}
/>
 <Text style={styles.title}>
Do You Want To Earn 25% Off Your First Purchase?
</Text>

<View style={styles.center}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Shop')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Start Shopping Now!
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
 fontSize:25,
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


export default Discount;
