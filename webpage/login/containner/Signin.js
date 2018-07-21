import React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigator } from 'react-navigation';
import axios from "axios";
// import axios from "./../../../lib/axios";
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

export default class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  Login = () => {
     console.log('email :'+this.state.email,'password :'+this.state.password);
     axios.post(`http://192.168.1.38:3003/account/signin`, { 
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
                <Button transparent>
                  <Icon style={styles.icon} name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Segment style={styles.Header}>
                  <Button first style={styles.buttonHeader}>
                    <Text>Sign in</Text>
                  </Button>
                  <Button last active>
                    <Text>Sign Up</Text>
                  </Button>
                </Segment>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text style={styles.logo}>Logo</Text>
              <Form style={styles.Form}>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input value={this.state.email} onChangeText={text => this.setField("email", text)} />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} value={this.state.password} onChangeText={text => this.setField("password", text)} />
                </Item>
                <Text style={styles.Text}>FORGOT PASSWORD ?</Text>
                <Button onPress={this.Login} block dark style={styles.buttonSignin}>
                  <Text style={styles.textSignin}>Sign In</Text>
                </Button>
              </Form>
            </Content>
          </Container>;
  }

}






// constructor() {
//   super();
//   this.state = {
//     // isReady: false,
//     email : '',
//     password : '',
//   };
// }

// async componentWillMount() {
// await Expo.Font.loadAsync({
//   Roboto: require("native-base/Fonts/Roboto.ttf"),
//   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//   Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
// });
// this.setState({ isReady: true });
// }
//   render() {
//     // if (!this.state.isReady) {
//     //   return <Expo.AppLoading />;
//     // }
//     console.log(this.state)
//     return <Container>
//         <Header span hasSegment style={styles.Header}>
//           <Left>
//             <Button transparent>
//               <Icon style={styles.icon} name="arrow-back" />
//             </Button>
//           </Left>
//           <Body>
//             <Segment style={styles.Header}>
//               <Button first style={styles.buttonHeader}>
//                 <Text>Sign in</Text>
//               </Button>
//               <Button last active>
//                 <Text>Sign Up</Text>
//               </Button>
//             </Segment>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Text style={{ fontSize: 72, textAlign: "center" }}>Logo</Text>
//           <Form style={styles.Form}>
//             <Item floatingLabel first>
//               <Label>E-mail</Label>
//               <Input onChangeText={text => this.setField("email", text)} />
//             </Item>
//             <Item floatingLabel last>
//               <Label>Password</Label>
//               <Input onChangeText={text => this.setField("password", text)} />
//             </Item>
//           </Form>
//           <Text style={styles.Text}>FORGOT PASSWORD ?</Text>
//           <Button onPress={() => navigation.navigate("Welcome")} block dark style={styles.buttonSignin}>
//             <Text style={styles.textSignin}>Sign In</Text>
//           </Button>
//         </Content>
//       </Container>;
//   }
// }
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
    textAlign: "center",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    // marginTop : '20%'
  },
  buttonHeader: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 10
  },
  icon: {
    color: "black"
  },
  buttonSignin: {
    width: "80%",
    textAlign: "center",
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
    padding:90
  }
});