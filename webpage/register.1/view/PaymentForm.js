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
  Input,
  Item,
  DatePicker
} from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { connectStyle, StyleProvider } from "native-base";

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Content>
        <Text style={styles.textImage}>Payment Image</Text>
        <Text style={styles.textDetail}>Payment Details</Text>
        <Text style={styles.tagline}>
          Please enter your card details or skip
        </Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Card Number</Label>
            <Input />
          </Item>
          {/* Date */}
          {/* <Text style={styles.date}>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text> */}
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
          />
          
          {/* ----- */}
          <Item floatingLabel>
            <Label>CVV/Security Code</Label>
            <Input />
          </Item>
        </Form>
        <Button block dark style={styles.ButtonSkip} 
           onPress={() => this.props.setField({stepFlow : this.props.role === 1 ? 4 : 5})}
          // if user is model go to information for model else user is modeling go to choose category interesting
            >
          <Text>Next Or Skip</Text>
        </Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  textImage: {
    fontSize: 72,
    textAlign: "center"
  },
  textDetail: {
    fontSize: 24,
    textAlign: "center",
    marginTop: "10%"
  },
  tagline: {
    fontSize: 16,
    textAlign: "center"
  },
  ButtonSkip: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "35%",
    marginRight: "35%",
    marginBottom: 15,
    marginTop: 15,
    width: "30%"
  },
  form: {
    width: "90%",
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "5%"
  },
 
  
});
