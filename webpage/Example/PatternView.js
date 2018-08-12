import React from "react";
import { View, Content, Container } from "native-base";
import { StyleSheet } from 'react-native';

export default class PatternView extends React.Component {
    state = {
    };

    render() {
        return (
            <Container containerstyle={{flex:1}}>
                <Content style={Styles.ContentBox}>
                    <View style={Styles.ViewBox}>
                    </View>
                    <View style={Styles.ViewBox}>
                    </View>
                </Content>
            </Container>
        );
    }
}

const Styles = StyleSheet.create({
    ContentBox: {
        flex:1
    },
    ViewBox: {
        flex:1
    },
});