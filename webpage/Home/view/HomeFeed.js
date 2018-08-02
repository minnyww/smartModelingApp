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
  View,
  Card,
  Thumbnail,
  CardItem,
  List,
  ListItem
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, ImageBackground, Picker, ScrollView } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import { Image } from "react-native";
import { withNavigation } from "react-navigation";

class HomeFeed extends React.Component {
  render() {
    return (
      <Grid>
        {/* VIp */}
        <Row>
          <Col>
            <Content>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Card
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <CardItem cardBody>
                    <Image 
                      source={require("../style/model.png")}
                      style={{
                        height: 200,
                        width: 350,
                        flex: 1,
                        resizeMode: "cover"
                        
                      }}
                    />
                  </CardItem>
                  <CardItem style={{ backgroundColor: "lightpink" }} >
                    <Left>
                      <Text>Myy</Text>
                    </Left>
                    <Right>
                      <Text>Jidapha Silkaphan</Text>
                    </Right>
                  </CardItem>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <CardItem cardBody>
                    <Image
                      source={require("../style/model.png")}
                      style={{
                        height: 200,
                        width: 350,
                        flex: 1,
                        resizeMode: "cover"
                      }}
                    />
                  </CardItem>
                  <CardItem style={{ backgroundColor: "lightpink" }}>
                    <Left>
                      <Text>Myy</Text>
                    </Left>
                    <Right>
                      <Text>Jidapha Silkaphan</Text>
                    </Right>
                  </CardItem>
                </Card>
              </ScrollView>
            </Content>
          </Col>
        </Row>
        {/* VIp */}

        {/* Feed */}
        <Row style={{ height: "5%" }}>
          <View
            style={{
              flexDirection: "row"
              // justifyContent: "space-between",
              // alignItems: "center",
              // paddingHorizontal: 10
            }}
          >
            <Text
              style={{ marginLeft: "3%", paddingRight: "45%", fontSize: 18 }}
            >
              Suggest Model
            </Text>

            <Text >View more</Text>
          </View>
        </Row>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: "5%" }}
        >
          <Row>
            <Col>
              <Content >
                <Card >
                  <CardItem cardBody >
                    <Image
                      source={require("../style/model.png")}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem style={{ backgroundColor: "lightpink" }}>
                    <Left>
                      <Text>Myy</Text>
                    </Left>
                    <Body>
                      <Text>Jidapha Silkaphan</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Col>
            <Col>
              <Content>
                <Card>
                  <CardItem cardBody>
                    <Image
                      source={require("../style/model.png")}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem style={{ backgroundColor: "lightpink" }}>
                    <Left>
                      <Text>Maew</Text>
                    </Left>
                    <Body>
                      <Text>Waranya Siriphat</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Col>
            <Col>
              <Content>
                <Card>
                  <CardItem cardBody>
                    <Image
                      source={require("../style/model.png")}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem style={{ backgroundColor: "lightpink" }}>
                    <Left>
                      <Text>Taylor</Text>
                    </Left>
                    <Body>
                      <Text>Swapam</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Col>
          </Row>
        </ScrollView>
        {/* Feed */}
      </Grid>
    );
  }
}
const styles = StyleSheet.create({
  feed: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "lightpink",
    justifyContent: "center"
  },
  feed1: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "lightblue",
    justifyContent: "center"
  }
});
export default withNavigation(HomeFeed);
