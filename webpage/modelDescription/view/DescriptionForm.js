import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Icon,
  Text,
  View,
  Thumbnail,
  Left,
  Right,
  CardItem,
  Card,
  Segment,
  Tabs,
  Tab
} from "native-base";
import { StyleSheet, ImageBackground, Picker } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../../register/view/HeaderBar";
import { withNavigation } from "react-navigation";
import { Image } from "react-native";
// import profileTab from "../view/profileTab"
class DescriptionForm extends React.Component {
  render() {
    return (
      <Content>
        <Card
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/22552630_10210859805792919_1860019362927490383_n.jpg?_nc_cat=0&oh=dd33b0fd1a4152a0e3c568204e87bfff&oe=5BC870DF"
              }}
              style={{
                height: 200,
                width: 350,
                flex: 1,
                resizeMode: "cover"
              }}
            />
          </CardItem>
        </Card>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10
          }}
        >
          <Text style={{ fontSize: 18 }}>Jidapha Sikaphan</Text>
          <Text style={{ fontSize: 18 }}>Age : 21</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10
          }}
        >
          <Text style={{ fontSize: 18 }}>Gender : Female</Text>
          <Text style={{ fontSize: 18 }}>097242077x</Text>
        </View>
        {/* social */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 3
          }}
        >
          <Thumbnail
            style={{ marginHorizontal: 3 }}
            source={require("../style/facebook.png")}
          />
          <Thumbnail
            style={{ marginHorizontal: 3 }}
            source={require("../style/instagram.png")}
          />
          <Thumbnail
            style={{ marginHorizontal: 3 }}
            source={require("../style/line.png")}
          />
        </View>
        {/* Segment */}
        <Tabs>
          <Tab heading="Profile">{/* <profileTab/> */}</Tab>
          <Tab heading="Photos" />
          <Tab heading="Experience" />
        </Tabs>

        <Button bordered dark style={styles.ButtonSkip}>
          <Text>Chat</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  ButtonSkip: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "35%",
    marginRight: "35%",
    marginBottom: 15,
    marginTop: 15,
    width: "30%"
  }
});
export default withNavigation(DescriptionForm);
