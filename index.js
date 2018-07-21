/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
// import Welcome from './webpage/welcome/containner/Welcome'
// import Login from "./webpage/login/containner/Login";

import Signin from "./webpage/login/containner/Signin";;

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Signin);
