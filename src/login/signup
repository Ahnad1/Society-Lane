import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';



export default class Signup extends Component {

   static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

  render() {
     
    return (
      
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

 <View style={styles.textContainer}>

<Image source ={{uri: 'https://codehs.com/uploads/9b329bc770d8f5032a24e231b9c018d1'}}
 style={{ height: 40, width: 40, justifyContent: 'center', margin: 40, alignContent: 'center' }}
/>

</View>
<Text style= {styles.text}>
Sign in 
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
             <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

             <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Shop')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            CONTINUE
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>



          </View>
        </View>
      
    );
  }

}



const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
     fontSize:40
     ,
  color: 'red',
  fontFamily:'Playfair Display SC',
  margin: 10,
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor:'lightblue',
width:100,
height:50,
justifyContent:'center',
alignItems:'center',
    
   
    },

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});


