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
  View,
  Card,
  Thumbnail,
  CardItem,
  List,
  ListItem
} from "native-base";
import { StyleSheet, ImageBackground, Picker } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import { StackNavigator } from "react-navigation";

export default class HomeFeed extends React.Component {
  render() {
    return (
      <Content style={styles.Content}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/270090_1898070493210_6346651_n.jpg?_nc_cat=0&oh=8e9095b10084a7e3ed1dae82109dce55&oe=5BDF9DD5"
                }}
              />
              <Body>
                <Text>Myy</Text>
                <Text note>Jidapha Silkaphan</Text>
              </Body>
            </Left>
          </CardItem>
          {/* ใส่รูปไม่ได้วะ */}
          {/* <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://images.pexels.com/photos/235462/pexels-photo-235462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem> */}
        </Card>

        <List>
          <ListItem>
            <Left>
              <Text>Model Suggest</Text>
            </Left>
            <Right>
              <Text>View More</Text>
            </Right>
          </ListItem>
        </List>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/270090_1898070493210_6346651_n.jpg?_nc_cat=0&oh=8e9095b10084a7e3ed1dae82109dce55&oe=5BDF9DD5"
              }}
            />
            <Body>
              <Text>Myy</Text>
              <Text note>Jidapha Silkaphan</Text>
            </Body>
          </Left>
        </CardItem>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  cardList: {
    width: "30%",
    marginLeft: "5%"
  },
  Content: {
    flex: 1
  }
});
