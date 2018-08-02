import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { StackNavigator } from "react-navigation";
// import axios from "./../../../lib/axios";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Form,
        Item, Input, Label, Segment} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class PasswordField extends React.Component {
   state = {
      password: '',
      errorfield:false
    }

  checkPatternPassword = (value) => {
    let error=false;  
    if(value){
        if (!value.match(/^(?=.*[a-zA-Z$@$!%*?&])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,20}/g)) {
          // Must contain at least one letter and one number,and minimum 8 and maximum 10 characters.
            error = true;
        }
        if(this.props.field === "confirmPassword"){
            if(this.props.value != this.props.password){
                 error = true;
            }
        }
    }
     this.props.setField(this.props.invalidField, error);
     this.setState({errorfield:error})
  }
  render(){
        return (
            <Item floatingLabel error={this.state.errorfield}>
                <Label>{this.props.label}</Label>
                <Input secureTextEntry={true} 
                        value={this.props.value} 
                        onEndEditing={ (event) => this.checkPatternPassword(event.nativeEvent.text) }
                        onChangeText={text => this.props.setField(this.props.field, text)}/>
            </Item>
        )
  }
}