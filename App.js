import React from "react";
import { StackNavigator } from "react-navigation";
import Signin from "./webpage/login/container/Signin";
<<<<<<< HEAD
=======
import Signup from "./webpage/register/container/Signup";
>>>>>>> d420ab89249229c8f1621b6453364e115c95f06e
import Welcome from "./webpage/welcome/container/Welcome";
import Signup from "./webpage/register/container/Signup";
import ChooseType from "./webpage/register/container/ChooseType";
import Register from "./webpage/register/container/Register";
import Payment from "./webpage/register/container/Payment";
import SelectJob from "./webpage/register/container/SelectJob"
export default class App extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    Signin: {
      screen: Signin,
      navigationOptions: {
        header: null
      }
    },
<<<<<<< HEAD
    Signup: {
=======
     Signup: {
>>>>>>> d420ab89249229c8f1621b6453364e115c95f06e
      screen: Signup,
      navigationOptions: {
        header: null
      }
<<<<<<< HEAD
    },
    ChooseType: {
      screen: ChooseType,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        header: null
      }
    },
    SelectJob: {
      screen: SelectJob,
      navigationOptions: {
        header: null
      }
=======
>>>>>>> d420ab89249229c8f1621b6453364e115c95f06e
    }
    // Signup: { screen: Signup },
  },
  {
    initialRouteName: "Welcome"
  }
);
