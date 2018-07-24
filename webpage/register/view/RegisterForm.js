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
  Form,
  Item,
  Input,
  Label,
  Radio,
  List,
  ListItem
} from "native-base";
import { StyleSheet, Picker } from "react-native";
import { connectStyle, StyleProvider } from "native-base";
import HeaderBar from "../view/HeaderBar";
import { withNavigation } from 'react-navigation';
import PasswordField from "./../view/field-password";
import EmailField from "./../view/field-email";
class RegisterForm extends React.Component {
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
  render() {
    return (
      <Content>
        <Button block bordered info style={styles.buttonUpload}>
          <Text>Upload</Text>
        </Button>
        <Text style={styles.text}> Upload Your Photo </Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Fullname</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Nickname</Label>
            <Input />
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
          <Item floatingLabel>
            <Label>Personal Id</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Phone Number</Label>
            <Input />
          </Item>
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
        </Form>
        <Text style={styles.textUpload}>Upload Personal Card</Text>
        <Button block bordered info style={styles.buttonUpload}>
          <Text>Upload</Text>
        </Button>
        <Button block dark style={styles.buttonNext} onPress={()=> this.props.navigation.navigate("Payment")}> 
          <Text>Next </Text>
        </Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: "20%"
  },
  textUpload: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: "5%",
    marginBottom : '5%'
  },
  form: {
    width: "90%",
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "5%"
  },
  buttonUpload:{
    justifyContent: "center",
    textAlign : 'center',
    marginLeft:'35%',
    marginRight:'35%',
    marginBottom: 15,
    marginTop :15,
    width:'30%',
    
  },
  buttonNext :{
    width: "80%",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 10,
    marginTop :15,
    backgroundColor: "black"
  }
});
export default withNavigation(RegisterForm);
