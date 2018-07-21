import React from "react";
import { StyleSheet, View } from "react-native";
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
  Segment
} from "native-base";

export default class Signup extends React.Component {
  state = {
    email: "",
    password: ""
  };

  
  setField = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return <Container>
        <Header span hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={text => this.setField("email", text)} />
            </Item>
          </Form>
        </Content>
      </Container>;
  }
}
