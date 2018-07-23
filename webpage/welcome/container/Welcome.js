import React from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,
         Body, Icon, Text, Image, View } from "native-base";
import { StyleSheet, ImageBackground } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
// import Headerbar from "./../view/Headerbar";
import ButtonLogin from "./../view/ButtonLogin";

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  //   });
  //   this.setState({ isReady: true });
  // }

  render() {
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />;
    // }

    return (
      <Container>
        <ImageBackground
          source={require("./../style/image/bgmodel.png")}
          style={styles.container}
        >
          <Content style={styles.contentBody}>
            <Text style={styles.innerHeader}>Welcome</Text>

            <Text style={styles.innerSubline}>
              Welcome to smart modeling app , this app will help you to find
              something wrong in you country yes Thxq
            </Text>

            <Text style={styles.innerSubline}>Continue with :</Text>
            <ButtonLogin />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor:'transparent',
  },
  innerHeader: {
    color: "white",
    alignItems: "center",
    fontSize: 50,
    marginBottom: 5,
    textAlign: "center"
  },
  innerSubline: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    padding: 10
  },
  contentBody: {
    marginTop: "80%"
  }
});
