import React from "react";
import { View, Text, Icon } from "native-base";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons";
import { StyleSheet } from 'react-native';

export default class HeaderView extends React.Component {
    static props = {
        logo: PropTypes.bool.isRequired,
        headingText: PropTypes.string,
        backLink: PropTypes.string
    };

    static defalutProps = {
    };

    state = {
    };

    render() {
        const isLogo = this.props.logo;
        return (
            <View style={{ flex: 1, height: 200 }}>
                {
                    isLogo = logo ?
                        <View style={[Styles.ViewBox, { justifyContent: "center", alignItems: "center" }]}>
                            <Text>Logo</Text>
                        </View>
                        :
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={Styles.ViewBox}>
                                <Icon onPress={() => backClick()} type="" name="" />
                            </View>
                            <View style={[Styles.ViewBox, { justifyContent: "center", alignItems: "center" }]}>
                                <Text>{this.props.headingText}</Text>
                            </View>
                            <View style={Styles.ViewBox}>
                            </View>
                        </View>
                }
            </View>
        );
    }

    backClick() {
        
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