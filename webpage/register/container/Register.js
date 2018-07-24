import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Image,
  View
} from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../view/HeaderBar";
import { StackNavigator } from "react-navigation";
import RegisterForm from "../view/RegisterForm";
import Payment from "../container/Payment"

export default class Register extends React.Component {
  render() {
    return (
      <Container >
        <HeaderBar />
        <RegisterForm />
      </Container>
    );
  }
}
