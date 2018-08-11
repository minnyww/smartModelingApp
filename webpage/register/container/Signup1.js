import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { StackNavigator } from "react-navigation";
import axios from "./../../../lib/axios";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label,
  Segment,
} from "native-base";
import HeaderBar from "../view/HeaderBar";
import RegisterForm from "../view/RegisterForm";
import PaymentForm from "../view/PaymentForm";
import ChooseCatInteresting from "../view/ChooseCatInteresting";
import InformationModelForm from "../view/InformationModelForm";
import ChooseType from "./ChooseType";

export default class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    personalId: "",
    laserCode: "",
    fullname: "",
    nickname: "",
    gender: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    lineId: "",
    facebook: "",
    twitter: "",
    instagram: "",
    photoOfPassportCard: "",
    pictureProfile: "",
    countryId: 216, //default Thailand
    role: 1, // default model
    countryList: [],
    invalidField: true,

    stepFlow:1
  };

  showContent = () => {
      switch (this.state.stepFlow) {
        case 1: return <ChooseType />
        case 2: return <RegisterForm />
        case 3: return <PaymentForm />
        case 4: return <InformationModelForm />
        case 5: return <ChooseCatInteresting />
      }
  }


  render() {
    return (
      <Container style={styles.Container}>
        <HeaderBar />
        {this.showContent()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  }
});
