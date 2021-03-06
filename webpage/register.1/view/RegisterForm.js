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
    countryList : []
  }
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

  render() {
    return <Content>
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
          <EmailField value={this.props.state.email} field="email" label="Email" setField={this.props.setField} invalidField={this.props.state.invalidField} />
          <PasswordField value={this.props.state.password} field="password" label="Password" setField={this.props.setField} invalidField={this.props.state.invalidField} />
          <PasswordField value={this.props.state.confirmPassword} field="confirmPassword" label="Confirm Password" setField={this.props.setField} password={this.props.state.password} invalidField={this.props.state.invalidField} />
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
            <Input value={this.props.state.personalId} onChangeText={text => this.props.setField({personalId : text})} maxLength={13} />
          </Item>
          <Item floatingLabel>
            <Label>Laser Code</Label>
            <Input value={this.props.state.laserCode} onChangeText={text => this.props.setField({laserCode : text})} />
          </Item>
          <Item floatingLabel>
            <Label>Phone number</Label>
            <Input value={this.props.state.phonenumber} onChangeText={text => this.props.setField({phonenumber : text})} maxLength={10} />
          </Item>
          <Item>
            <Label>Gender</Label>
            <Picker selectedValue={this.props.state.gender} style={{ height: 75, width: 200 }} onValueChange={value => this.props.setField({gender:value})}>
              <Picker.Item label="Female" value="F" />
              <Picker.Item label="Male" value="M" />
            </Picker>
          </Item>

          <Item floatingLabel>
            <Label>Address</Label>
            <Input value={this.props.state.address} onChangeText={text => this.props.setField({address: text})} />
          </Item>
          <Item>
            <Label>Country</Label>
            <Picker selectedValue={this.props.state.countryId} style={{ height: 75, width: 200 }} onValueChange={value => this.props.setField({countryId : value})}>
              {this.initialCountry()}
            </Picker>
          </Item>
          <Item floatingLabel>
            <Label>State</Label>
            <Input value={this.props.state.state} onChangeText={text => this.props.setField({state: text})} />
          </Item>
          <Item floatingLabel>
            <Label>City</Label>
            <Input value={this.props.state.city} onChangeText={text => this.props.setField({city : text})} />
          </Item>
          <Item floatingLabel>
            <Label>Zipcode</Label>
            <Input value={this.props.state.zipcode} onChangeText={text => this.props.setField({ zipcode : text})} />
          </Item>
        </Form>
        <Text style={styles.textUpload}>Upload Personal Card</Text>
        <Button block bordered info style={styles.buttonUpload}>
          <Text>Upload</Text>
        </Button>
        <Button block dark style={styles.buttonNext} 
            onPress={() => this.props.setField({stepFlow : 3})}
          // go to payment form
          >
          <Text>Next </Text>
        </Button>
      </Content>;
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
