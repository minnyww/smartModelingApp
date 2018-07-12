import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import axios from "./../../../lib/axios";


export default class Login extends React.Component {
  state = {
    email : '',
    password : '',
  }
  
   Login = () => {
      console.log('email :'+this.state.email,'password :'+this.state.password);

  }

  setField = (field,value) => {
     this.setState({ [field]: value });
  }
  
  render() {
    return <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                value={this.state.email} 
                onChangeText={text => this.setField('email',text)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
                value={this.state.password} 
                onChangeText={text => this.setField('password',text)}/>
            </Item>
            <Button block dark onPress={this.Login}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>;
  }
}