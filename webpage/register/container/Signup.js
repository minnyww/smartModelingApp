import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { StackNavigator } from "react-navigation";
import axios from "./../../../lib/axios";
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
import PasswordField from "./../view/field-password";
import EmailField from "./../view/field-email";
// import Test from "./../view/test";
export default class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    personalId: "",
    laserCode: "",
    fullname: "",
    nickname: "",
    gender: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    lineId: "",
    facebook: "",
    twitter: "",
    instagram: "",
    photoOfPassportCard: "",
    pictureProfile: "",
    countryId: 216, //default Thailand
    role: 1, // default model
    countryList: [],
    invalidField: true
  };

  setField = (field, value) => {
    this.setState({ [field]: value });
  };

  componentDidMount = async () => {
    var countryList = await axios.get(`/account/countryList`);
    this.setState({
      countryList: countryList.data
    });
  };

  initialCountry = () => {
    //  var countryList = await axios.get(`/account/countryList`)
    var pickerItem = this.state.countryList.map((country, i) => (
      <Picker.Item
        label={country.countryName}
        value={country.countryId}
        key={i}
      />
    ));
    return pickerItem;
  };

  signup = async () => {
    await axios
      .post(`/account/signup`, {
        email: this.state.email,
        password: this.state.password,
        personalId: this.state.personalId,
        laserCode: this.state.laserCode,
        fullname: this.state.fullname,
        nickname: this.state.nickname,
        gender: this.state.gender,
        phonenumber: this.state.phonenumber,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        lineId: this.state.lineId,
        facebook: this.state.facebook,
        twitter: this.state.twitter,
        instagram: this.state.instagram,
        photoOfPassportCard: this.state.photoOfPassportCard,
        pictureProfile: this.state.pictureProfile,
        countryId: this.state.countryId,
        role: this.state.role
      })
      .then(res => {
        console.log(res.data);
        // if(res.data){
        //   // success
        // }else{
        //   alert(res.data.message);
        // }
      });
  };

  checkPatternPassword = value => {
    let error = false;
    if (value) {
      if (
        !value.match(/^(?=.*[a-zA-Z$@$!%*?&])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,20}/g)
      ) {
        // Must contain at least one letter and one number,and minimum 8 and maximum 10 characters.
        error = true;
      }
    }
    this.setState({ errorfield: error });
  };

  // <Picker.Item label="Java" value="java" />

<<<<<<< HEAD
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Button
              dark
              style={{ justifyContent: "center", alignSelf: "stretch" }}
            >
              <Text style={{ fontSize: 30 }}>Select Your photo</Text>
            </Button>
            <Item floatingLabel>
              <Label>Fullname</Label>
              <Input
                value={this.state.fullname}
                onChangeText={text => this.setField("fullname", text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Nickname</Label>
              <Input
                value={this.state.nickname}
                onChangeText={text => this.setField("nickname", text)}
              />
            </Item>
            <EmailField
              value={this.state.email}
              field="email"
              label="Email"
              setField={this.setField}
              invalidField={this.state.invalidField}
            />
            <PasswordField
              value={this.state.password}
              field="password"
              label="Password"
              setField={this.setField}
              invalidField={this.state.invalidField}
            />
            <PasswordField
              value={this.state.confirmPassword}
              field="confirmPassword"
              label="Confirm Password"
              setField={this.setField}
              password={this.state.password}
              invalidField={this.state.invalidField}
            />
=======
  render(){
        return ( <Container>
            <Content>
              <Form>
                <Grid>
                  <Row style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Button dark bordered={this.state.role !== 1} style={{ margin: 10 }} onPress={() => this.setField("role", 1)}>
                      <Text>Model</Text>
                    </Button>
                    <Button dark bordered={this.state.role === 1} style={{ margin: 10 }} onPress={() => this.setField("role", 2)}>
                      <Text>Modeling</Text>
                    </Button>
                  </Row>
                </Grid>
                <Button dark style={{ justifyContent: "center", alignSelf: "stretch" }}>
                  <Text style={{ fontSize: 30 }}>
                    Select Your photo
                  </Text>
                </Button>
                <Item floatingLabel>
                  <Label>Fullname</Label>
                  <Input value={this.state.fullname} onChangeText={text => this.setField("fullname", text)} />
                </Item>
                <Item floatingLabel>
                  <Label>Nickname</Label>
                  <Input value={this.state.nickname} onChangeText={text => this.setField("nickname", text)} />
                </Item>
                <EmailField value={this.state.email} field="email" label="Email" setField={this.setField} invalidField={this.state.invalidField} />
                <PasswordField value={this.state.password} field="password" label="Password" setField={this.setField} invalidField={this.state.invalidField} />
                <PasswordField value={this.state.confirmPassword} field="confirmPassword" label="Confirm Password" setField={this.setField} password={this.state.password} invalidField={this.state.invalidField} />
>>>>>>> d420ab89249229c8f1621b6453364e115c95f06e

            {/* <Item floatingLabel>
                  <Label>Email</Label>
                  <Input value={this.state.email} onChangeText={text => this.setField("email", text)} />
                </Item> 
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} value={this.state.password} onChangeText={text => this.checkPatternPassword(text)} />
                </Item>
                <Item floatingLabel>
                  <Label>Confirm Password</Label>
                  <Input secureTextEntry={true} value={this.state.confirmPassword} onChangeText={text => this.setField("confirmPassword", text)} />
                </Item> */}
            <Item floatingLabel>
              <Label>Citizen Id</Label>
              <Input
                value={this.state.personalId}
                onChangeText={text => this.setField("personalId", text)}
                maxLength={13}
              />
            </Item>
            <Item floatingLabel>
              <Label>Laser Code</Label>
              <Input
                value={this.state.laserCode}
                onChangeText={text => this.setField("laserCode", text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Phone number</Label>
              <Input
                value={this.state.phonenumber}
                onChangeText={text => this.setField("phonenumber", text)}
                maxLength={10}
              />
            </Item>
            <Item>
              <Label>Gender</Label>
              <Picker
                selectedValue={this.state.gender}
                style={{ height: 75, width: 200 }}
                onValueChange={value => this.setState({ gender: value })}
              >
                <Picker.Item label="Female" value="F" />
                <Picker.Item label="Male" value="M" />
              </Picker>
            </Item>

            <Item floatingLabel>
              <Label>Address</Label>
              <Input
                value={this.state.address}
                onChangeText={text => this.setField("address", text)}
              />
            </Item>
            <Item>
              <Label>Country</Label>
              <Picker
                selectedValue={this.state.countryId}
                style={{ height: 75, width: 200 }}
                onValueChange={value => this.setState({ countryId: value })}
              >
                {this.initialCountry()}
              </Picker>
            </Item>
            <Item floatingLabel>
              <Label>State</Label>
              <Input
                value={this.state.state}
                onChangeText={text => this.setField("state", text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input
                value={this.state.city}
                onChangeText={text => this.setField("city", text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Zipcode</Label>
              <Input
                value={this.state.zipcode}
                onChangeText={text => this.setField("zipcode", text)}
              />
            </Item>
            <Button
              dark
              style={{
                justifyContent: "center",
                alignSelf: "stretch",
                marginTop: 20
              }}
            >
              <Text style={{ fontSize: 30 }}>Upload Personal Card</Text>
            </Button>

<<<<<<< HEAD
            <Button
              primary
              style={{
                justifyContent: "center",
                alignSelf: "stretch",
                marginTop: 20
              }}
              onPress={this.signup}
            >
              <Text style={{ fontSize: 30 }}> NEXT </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
=======
                <Button primary style={{ justifyContent: "center", alignSelf: "stretch", marginTop: 20 }} onPress={this.signup}>
                  <Text style={{ fontSize: 30 }}> NEXT </Text>
                </Button>
              </Form>
            </Content>
          </Container>);
>>>>>>> d420ab89249229c8f1621b6453364e115c95f06e
  }
}
