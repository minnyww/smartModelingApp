/** @format */

import {AppRegistry} from 'react-native';
import App from './App';

import Signin from "./webpage/login/container/Signin";
// import Login from "./webpage/login/container/Login";
import Signup from "./webpage/register/container/Signup";
import Welcome from "./webpage/welcome/container/Welcome";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
