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
  View,
  Item,
  Label,
  Picker,
  Form
} from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { connectStyle, StyleProvider } from "native-base";

import { withNavigation } from "react-navigation";
import PaymentForm from "../view/PaymentForm";

// import Headerbar from "./../view/Headerbar";

export default class ChooseCatInteresting extends React.Component {
  render() {
    return (
      <Content style={styles.Content}>
        <Text style={styles.Text}>Choose the 5 that interest you.</Text>
        <Form style={styles.form}>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              placeholder="Select your category"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
            >
              <Picker.Item label="A" value="key0" />
              <Picker.Item label="B" value="key1" />
              <Picker.Item label="C" value="key2" />
              <Picker.Item label="D" value="key3" />
              <Picker.Item label="E" value="key4" />
            </Picker>
          </Item>
        </Form>
        <Button
          dark
          style={styles.buttonSubmit}
          onPress={() => this.props.navigation.navigate("Signin")}
        >
          <Text> Submit </Text>
        </Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  Content: {
    flex: 1
  },
  form: {
    width: "90%",
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "3%"
  },
  Text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: "5%"
  },
  buttonSubmit:{
    marginLeft : '70%',
    marginTop : 20
  }
});