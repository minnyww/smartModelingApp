import React from "react";
import { Styles } from "../../webpage/Example/PatternStyles";
import { View, Content, Container } from "native-base";
import { Header } from "../Components/Header/HeaderContainer"

export default class Example extends React.Component {
    state = {
    };

    render() {
        return (
            <Container containerstyle={{flex:1}}>
                <Header logo={true} headingText={"Home"} backLink={"Link"} />
                <Content style={Styles.ContentBox}>
                    <View>
                    </View>
                </Content>
            </Container>
        );
    }
}