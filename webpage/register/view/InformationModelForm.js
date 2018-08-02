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
        <View style={{ alignItems: "center" }}>
          <Text>Image Information</Text>
          <Text style={styles.text}>General Information</Text>
          <Text style={styles.tagline}>Please enter your detail</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Weight</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Height</Label>
            <Input />
          </Item>

          <Item>
            <Label>Teeth</Label>
            <Picker
              style={{ height: 75, width: 200 }}
              // mode="dropdown"
              // placeholder="Teeth"
              // placeholderStyle={{ color: "#bfc6ea" }}
              // placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Yes" value="key0" />
              <Picker.Item label="No" value="key1" />
            </Picker>
          </Item>

          <Item>
            <Label>Shirt Size</Label>
            <Picker
              style={{ height: 75, width: 200 }}
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
          {/* <Text style={styles.textLabel}>Job Experience</Text> */}
          <Item>
            <Label>Experience</Label>
            <Picker
              style={{ height: 75, width: 200 }}
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
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textHead}>Choose 5 That your interest</Text>
          </View>
          <Item>
            <Label>Job Type</Label>
            <Picker
              style={{ height: 75, width: 200 }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Drama" value="key0" />
              <Picker.Item label="Photograph" value="key1" />
            </Picker>
          </Item>
        </Form>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textHead}>Upload Your 5 photos </Text>
        </View>
        <Button bordered style={styles.buttonUpload}>
          <Text>Upload</Text>
        </Button>
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
    alignItems: "center",
    marginLeft: "3%",
    marginRight: "5%"
  },
  // textLogo: {
  //   fontSize: 72,
  //   // textAlign: "center"
  // },
  text: {
    fontSize: 24,
    // textAlign: "center",
    paddingTop: 20
  },
  tagline: {
    fontSize: 16,
    // textAlign: "center",
    paddingTop: 10
  },
  textLabel: {
    paddingTop: 5
  },
  // picker: {
  //   width: "50%",
  //   // textAlign: "center",
  //   marginLeft: "3%",
  //   marginRight: "5%"
  // },
  textHead: {
    // justifyContent: "center",
    // textAlign: "center",
    fontSize: 24
  },
  buttonUpload: {
    justifyContent: "center",
    // textAlign: "center",
    marginLeft: "25%",
    marginRight: "25%",
    marginBottom: 15,
    marginTop: 15,
    width: "50%"
  }
});
