import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Password from './src/login/password.js';
import Discount from './src/login/discount.js';
import Shop from './src/login/shop.js';
import Mstyle from './src/login/mstyle.js';
import Wstyle from './src/login/wstyle.js';
import Cart from './src/login/cart.js';
import Trending from './src/login/trending.js';
import Trendingw from './src/login/trendingw.js';

import Comingsoon from './src/login/comingsoon.js';






const RootStack = createStackNavigator(
{
Home: { screen: Homescreen },
Signup: {screen: Signup},
Password: { screen: Password },
Discount: {screen: Discount},
Shop: {screen: Shop},
Mstyle: {screen: Mstyle},
Wstyle: {screen: Wstyle},
Cart: {screen: Cart},
Trending: {screen: Trending},
Trendingw: {screen: Trendingw},
Comingsoon: {screen: Comingsoon},

},
{
initialRouteName: 'Home',
}

);

export default class App extends Component {
render() {
return <RootStack />;
}
}
