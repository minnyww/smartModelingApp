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
import { withNavigation } from "react-navigation";
// import Headerbar from "./../view/Headerbar";

class HeaderBar extends React.Component {
  render() {
    return (
      <Header hasSegment style={{ backgroundColor: "white" }}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Signin")}
          >
            <Icon name="arrow-back" style={{ color: "black" }} />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
    );
  }
}
export default withNavigation(HeaderBar);
