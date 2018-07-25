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
  Form,
  Label,
  Item,
  Picker,
  Input
} from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../view/HeaderBar";
import { StackNavigator } from "react-navigation";
import PaymentForm from "../view/PaymentForm";

export default class InformationModelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: ""
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Content>
        <Text style={styles.textLogo}>Image Information</Text>
        <Text style={styles.text}>General Information</Text>
        <Text style={styles.tagline}>Please enter your detail</Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Weight</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Height</Label>
            <Input />
          </Item>
          <Text style={styles.textLabel}>Teeth</Text>
          <Item picker>
            <Picker
              style={styles.picker}
              mode="dropdown"
              placeholder="Teeth"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Yes" value="key0" />
              <Picker.Item label="No" value="key1" />
            </Picker>
          </Item>
          <Text style={styles.textLabel}>Select Shirt Size</Text>
          <Item picker>
            <Picker
              style={styles.picker}
              mode="dropdown"
              placeholder="Size"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="S" value="key0" />
              <Picker.Item label="M" value="key1" />
              <Picker.Item label="L" value="key2" />
              <Picker.Item label="XL" value="key3" />
              <Picker.Item label="XXL" value="key4" />
            </Picker>
          </Item>
          <Text style={styles.textLabel}>Job Experience</Text>
          <Item picker>
            <Picker
              style={styles.picker}
              mode="dropdown"
              placeholder="Job Name"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Drama" value="key0" />
              <Picker.Item label="Photograph" value="key1" />
            </Picker>
          </Item>
          <Item floatingLabel>
            <Label>Job Description</Label>
            <Input />
          </Item>
          <Button bordered style={styles.buttonUpload}>
            <Text>Add Job Name</Text>
          </Button>
          <Text style={styles.textHead}>Choose 5 That your interest</Text>
          <Item picker>
            <Picker
              style={styles.picker}
              mode="dropdown"
              placeholder="Job Catagory"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Drama" value="key0" />
              <Picker.Item label="Photograph" value="key1" />
            </Picker>
          </Item>

          <Text style={styles.textHead}>Upload Your 5 photos </Text>
          <Button bordered style={styles.buttonUpload}>
            <Text>Upload</Text>
          </Button>
        </Form>
        <Button bordered style={styles.buttonUpload}>
            <Text>Finish</Text>
          </Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    width: "90%",
    textAlign: "center",
    marginLeft: "5%",
    marginRight: "5%"
  },
  textLogo: {
    fontSize: 72,
    textAlign: "center"
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 20
  },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10
  },
  textLabel: {
    marginLeft: "5%",
    paddingTop: 5
  },
  picker: {
    width: "50%",
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "5%"
  },
  textHead: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24
  },
  buttonUpload: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "25%",
    marginRight: "25%",
    marginBottom: 15,
    marginTop: 15,
    width: "50%"
  }
});
