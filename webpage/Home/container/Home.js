import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Image,
  View
} from "native-base";
import { StyleSheet, ImageBackground,Picker } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../../register/view/HeaderBar"
import { StackNavigator } from "react-navigation";
import HomeFeed from "../view/HomeFeed"
import FooterBar from "../view/FooterBar"

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <HeaderBar/>
        <HomeFeed/>
        <FooterBar/>
      </Container>
    );
  }
}

