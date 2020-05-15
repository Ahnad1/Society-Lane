import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, Image, ScrollView } from 'react-native';
import { Constants } from 'expo';
 
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
<View style={styles.bar}>
<Text style={styles.title}>
Women's Style
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
</View>
<ScrollView>
<View style={styles.center}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Trendingw')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Trending
</Text>
</View>
</TouchableHighlight>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Comingsoon')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
T-Shirts
</Text>
</View>
</TouchableHighlight>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Comingsoon')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Jeans
</Text>
</View>
</TouchableHighlight>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Comingsoon')}>
<View style={styles.welcomeButton}>
<Text style={styles.buttonText}>
Sale
</Text>
</View>
</TouchableHighlight>
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
 fontSize:55,
color:'red',
fontFamily:'Playfair Display SC',
},

welcomeButton:{
backgroundColor:'lightblue',
width:100,
height:50,
justifyContent:'center',
alignItems:'center',
}

});
