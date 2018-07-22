import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { StackNavigator } from "react-navigation";
// import axios from "./../../../lib/axios";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Form,
        Item, Input, Label, Segment} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class EmailField extends React.Component {
   state = {
      errorfield:false
    }

  checkPatternEmail = (value) => {
    let error=false;  
    if(value){
        if (!value.match(/^(([a-zA-Z0-9_.]+(\.[a-zA-Z0-9_.])*)|(\".+\"))@(([a-zA-Z0-9]+\.)+([a-zA-Z0-9]+[a-zA-Z]))$/g)) {
          // pattern emaill ex. xxx@xx.xx
            error = true;
        }
    }
     this.props.setField(this.props.invalidField, error);
     this.setState({errorfield:error})
  }
  render(){
        return (
            <Item floatingLabel error={this.state.errorfield}>
                <Label>{this.props.label}</Label>
                <Input  value={this.props.value} 
                        onEndEditing={ (event) => this.checkPatternEmail(event.nativeEvent.text) }
                        onChangeText={text => this.props.setField(this.props.field, text)}/>
            </Item>
        )
  }
}