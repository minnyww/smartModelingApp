import { Container, Button, Text, Content, Body, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from 'react-navigation';
class ButtonLogin extends React.Component {
  render() {
    return (
      <Content>
        <Button block style={styles.buttonEmail} onPress={()=> this.props.navigation.navigate("Signin")}>
          <Icon name="mail-forward" />
          <Text style={styles.Textbutton}>E-mail</Text>
        </Button>
        <Button block style={styles.buttonFacebook}>
          <Icon name="facebook" />
          <Text style={styles.Textbutton}>Facebook</Text>
        </Button>
        <Button block style={styles.buttonGoogle}>
          <Icon name="google-plus" />
          <Text style={styles.Textbutton}>Google +</Text>
        </Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  buttonEmail: {
    width: "80%",
    // textAlign: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 10,
    backgroundColor: "grey"
  },
  buttonFacebook: {
    width: "80%",
    // textAlign: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 10,
    backgroundColor: "#3b5998"
  },
  buttonGoogle: {
    width: "80%",
    // textAlign: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 10,
    backgroundColor: "#d34836"
  }
});
export default withNavigation(ButtonLogin);
