import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";


const supportedURL1 = "https://www.bbcicecream.com/";
const supportedURL2 = "https://www.pacsun.com/";
const supportedURL3 = "https://www2.hm.com/en_us/index.html";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
const handlePress = useCallback(async () => {
// Checking if the link is supported for links with custom URL scheme.
const supported = await Linking.canOpenURL(url);

if (supported) {
// Opening the link with some app, if the URL scheme is "http" the web link should be opened
// by some browser in the mobile
await Linking.openURL(url);
} else {
Alert.alert(`Don't know how to open this URL: ${url}`);
}
}, [url]);

return <Button title={children} onPress={handlePress} />;
};

const Trending = () => {
return (
<View style={styles.container}>
<Text style= {styles.text}>
Men's Trending
</Text>
<OpenURLButton url={supportedURL1}>billionareboysclub</OpenURLButton>
<OpenURLButton url={supportedURL2}>pacsun</OpenURLButton>
<OpenURLButton url={supportedURL3}>h&m</OpenURLButton>

</View>
);
};

export default Trending;

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
text: {
  justifyContent: 'center',
 alignItems: 'center',
 fontSize:40,
color:'red',
fontFamily:'Playfair Display SC',
}
});
