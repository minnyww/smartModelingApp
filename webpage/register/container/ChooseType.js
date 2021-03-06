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
  View
} from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../view/HeaderBar";
import { StackNavigator } from "react-navigation";
// import Headerbar from "./../view/Headerbar";

export default class ChooseType extends React.Component {
  render() {
    return (
      <Container style={styles.Container}>
        <HeaderBar />
        <View style={styles.Content}>
          <Text style={styles.logo}>Logo</Text>
          <Text style={styles.text}>Select Register</Text>
          <Text style={styles.tagline}>
            You can select Model or Modeling to register
          </Text>
          <Button block dark style={styles.Button}>
            <Text>Modal</Text>
          </Button>
          <Button block dark style={styles.Button} onPress={()=> this.props.navigation.navigate('Register')}>
            <Text>Modeling</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    
  },
  Content: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center"
  },
  logo: {
    
    fontSize: 72,
    
  },
  text: {
    fontSize: 32,
    
    paddingTop: "20%"
  },
  tagline: {
    fontSize: 16,
    
  },
  Button: {
    width: "80%",
    
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 20,
    borderRadius: 10
  }
});
