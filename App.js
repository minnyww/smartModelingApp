import React from "react";
import { StackNavigator } from "react-navigation";
import Signin from "./webpage/login/container/Signin";
// import Signup from "./webpage/register/container/Signup";
import Welcome from "./webpage/welcome/container/Welcome";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Signin: { screen: Signin }
    // Signup: { screen: Signup },
  },
  {
    initialRouteName: "Welcome"
  }
);







// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import { StackNavigator } from "react-navigation";
// import Welcome from "./webpage/welcome/container/Welcome";
// import Login from "./webpage/login/container/Login";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const RootStack = StackNavigator(
//   {
//     Welcome: {
//       screen: Welcome
//              },
//     Login: {
//       screen: Login
//     }
//   },
//   {
//     initialRouteName: "Welcome",
//   }
// );
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//      return (
//      <RootStack />
//      );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
