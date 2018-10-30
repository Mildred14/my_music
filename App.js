import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button, Switch, TextInput, Alert} from 'react-native';

 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });

 type Props = {};
 export default class App extends Component<Props> {
   constructor(props){
     super(props);
     this.state = {
       switchValue: true,
       text: 'Placeholder',
     };
   }
   onChangeText = (text) => {
     console.warn(`Texto: ${text}`)
   }
   onChange = (value) => {
     console.warn(`El switch cambiará a: ${value}`)
     this.setState({switchValue: value})
   }
   onPressLearnMore = () => {
     Alert.alert(
       this.state.text,
       'Texto introducido',
       [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: () => console.log('OK Pressed')},
       ],
       { cancelable: true }
     )
   }
   render() {
     return (
       <View style={styles.container}>
         <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => this.setState({text})}
           placeholder={this.state.text}
         />
         <Switch
           onValueChange = {() => this.onChange(!this.state.switchValue)}
           value = {this.state.switchValue}
         />
         <Button
           onPress={this.onPressLearnMore}
           title="Learn More"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
         />
         <Text style={styles.welcome}>MyMusic - Mildred/</Text>
         {/* <Text style={styles.instructions}>To get started, edit App.js</Text>
         <Text style={styles.instructions}>{instructions}</Text> */}
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
     color: '#333',
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });

