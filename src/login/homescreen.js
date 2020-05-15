import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';
import { Constants } from 'expo';
 

 export default class Homescreen extends Component {

   static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
render() {
return (
<View style={styles.container}>
<View style={styles.bar}>
<Text style={styles.title}>
SOCIETY
 LANE
</Text>


<Image source ={{uri: 'https://codehs.com/uploads/9b329bc770d8f5032a24e231b9c018d1'}}
 style={{ height: 60, width: 60, justifyContent: 'center', margin: 40, alignContent: 'center' }}
/>
</View>
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
<Text style={styles.message}>
CREATE YOUR LANE IN SOCIETY
</Text>
<View style={styles.bar}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Signup')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Welcome
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
},

 
bar:{
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'row',
 margin: 20,
},
title:{
  justifyContent: 'center',
 alignItems: 'center',
 fontSize:40,
color:'red',
fontFamily:'Playfair Display SC',
},
message:{
  fontSize:19,
  color: 'red',
  fontFamily:'Playfair Display SC',
  margin: 10,
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

