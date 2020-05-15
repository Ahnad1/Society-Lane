     
import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight, ScrollView} from 'react-native';


export default class Homescreen extends Component {

   static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};


  render() {
     
    return (
     
          <View style={styles.container}>
<Image source ={{uri: 'https://codehs.com/uploads/9b329bc770d8f5032a24e231b9c018d1'}}
 style={{ height: 40, width: 40, justifyContent: 'center', margin: 40, alignContent: 'center' }}
/>
<Text style={styles.title}>
Choose Your Lane 
</Text>
<View style={{

paddingLeft:10,

height:10,

marginBottom:10,

borderStyle: 'dashed',

borderRadius: 0,

borderWidth: 5,

borderTopColor: 'yellow',

borderBottomColor: 'yellow',
}}/>
<ScrollView>
<View style={styles.center}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Wstyle')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Women´s style
</Text>

</View>
</TouchableHighlight>
<Image source ={{uri: 'https://codehs.com/uploads/9801745ec3bc8b1ebd1ae040a50ce8c7'}}

style={{ height: 180, width: 160, justifyContent: 'center', margin: 10,  }}

/>
</View>
<View style={styles.center}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Mstyle')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Men´s style
</Text>

</View>
</TouchableHighlight>
<Image source ={{uri: 'https://codehs.com/uploads/9843b47e8d8bfd7ff314ecb34836cb36'}}

style={{ height: 160, width: 160, justifyContent: 'center', margin: 10, }}/>
</View>
</ScrollView>
</View>
    );
  }

}



const styles = StyleSheet.create({
container: {
flex: 1,
},
title:{
 fontSize:25,
color:'red',
fontFamily:'Playfair Display SC',
},

welcomeButton:{
backgroundColor:'lightblue',
width:100,
height:50,
justifyContent:'center',
alignItems:'center',
},
center: {
  flexDirection: "row",
}

});
