import React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigator } from 'react-navigation';
// import axios from "axios";
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
import HeaderBar from "../../register/view/HeaderBar";
import PasswordField from "./../../register/view/field-password";
import EmailField from "./../../register/view/field-email";

export default class Signin extends React.Component {
  state = {
    email: '',
    password: '',
    invalidEmail:true,
    invalidPassword:true
  }
  
  Login = async () => {
     console.log('email :'+this.state.email,'password :'+this.state.password);
     await axios.post(`/auth/signin`, { 
          email: this.state.email,
          password:  this.state.password
        })
        .then(res => {
          if(res.data.status){
            // success
          }else{
            alert(res.data.message);
          }
        });
  }

  setField = (field, value) => {
    this.setState({ [field]: value });
  }
  
  render(){
        return <Container>
         
            <Header span hasSegment style={styles.Header}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon style={styles.icon} name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Segment style={styles.Header}>
                  <Button first style={styles.buttonHeader}>
                    <Text>Sign in</Text>
                  </Button>
<<<<<<< HEAD
                  <Button last active onPress={()=> this.props.navigation.navigate("ChooseType")}>
=======
                  <Button last active onPress={() => this.props.navigation.navigate("Signup")}>
>>>>>>> d420ab89249229c8f1621b6453364e115c95f06e
                    <Text>Sign Up</Text>
                  </Button>
                </Segment>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text style={styles.logo}>Logo</Text>
              <Form style={styles.Form}>
                <EmailField value={this.state.email} field="email" label="Email" setField={this.setField} invalidField="invalidEmail" />
                <PasswordField value={this.state.password} field="password" label="Password" setField={this.setField} invalidField="invalidPassword" />
                {/* <Item floatingLabel>
                  <Label>Email</Label>
                  <Input value={this.state.email} onChangeText={text => this.setField("email", text)} />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} value={this.state.password} onChangeText={text => this.setField("password", text)} />
                </Item> */}
                <Text style={styles.Text}>FORGOT PASSWORD ?</Text>
                <Button onPress={this.Login} block dark disabled={this.state.invalidEmail || this.state.invalidPassword} style={styles.buttonSignin}>
                  <Text style={styles.textSignin}>Sign In</Text>
                </Button>
              </Form>
            </Content>
          </Container>;
  }

}
const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  content: {
    flex: 1
  },
  Text: {
    color: "grey",
    textAlign: "center",
    fontSize: 14,
    paddingTop: 20
  },
  Segment: {
    backgroundColor: "transparent"
  },
  Header: {
    backgroundColor: "white"
  },
  Form: {
    // textAlign: "center",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    // marginTop : '20%'
  },
  buttonHeader: {
    // color: "white",
    backgroundColor: "black",
    borderRadius: 10
  },
  icon: {
    color: "black"
  },
  buttonSignin: {
    width: "80%",
    // textAlign: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 20,
    borderRadius: 10
  },
  textSignin: {
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    padding: 10
  },
  logo : {
    textAlign: "center",
    fontSize:72,
    padding:70
  }
});
