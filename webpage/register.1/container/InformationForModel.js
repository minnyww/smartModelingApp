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
import { StyleSheet, ImageBackground,Picker } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../view/HeaderBar";
import { StackNavigator } from "react-navigation";
import PaymentForm from "../view/PaymentForm";
import InformationModelForm from "../view/InformationModelForm"

export default class InformationForModel extends React.Component {
  render() {
    return (
      <Container>
        <HeaderBar/>
        <InformationModelForm/>
      </Container>
    );
  }
}

