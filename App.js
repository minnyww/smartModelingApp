import React from "react";
import { StackNavigator } from "react-navigation";
import Signin from "./webpage/login/container/Signin";
import Welcome from "./webpage/welcome/container/Welcome";
import Signup from "./webpage/register/container/Signup";
import ChooseType from "./webpage/register/container/ChooseType";
import Register from "./webpage/register/container/Register";
import Payment from "./webpage/register/container/Payment";
import SelectJob from "./webpage/register/container/SelectJob";
import InformationForModel from "./webpage/register/container/InformationForModel"
import Home from "./webpage/Home/container/Home"

import Signup1 from "./webpage/register.1/container/Signup1";

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
    Signup: {
      screen: Signup,
      navigationOptions: {
        header: null
      }
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
    },
    InformationForModel : {
      screen:InformationForModel,
      navigationOptions: {
        header: null
      },
    },
    Home : {
      screen:Home,
      navigationOptions: {
        header: null
      },
    },
    Signup1 : {
      screen:Signup1,
      navigationOptions: {
        header: null
      },
    },

    // Signup: { screen: Signup },
  },
  {
    initialRouteName: "Welcome"
  }
);
