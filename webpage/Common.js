import {Alert} from "react-native";
import {NavigationActions} from "react-navigation";

let navigation = {};
let dispatch;

exports.navigate = function (routerName, params) {
    navigation.navigate(routerName, params);
};

exports.goBack = function (routeName) {
    let route = getRouteFromName(navigation, routeName, 1);
    navigation.dispatch(NavigationActions.back(route));
};

exports.alert = function (title, message) {
    setTimeout(() => {
        Alert.alert(title, message);
    }, 200);
};

exports.dispatch = function(actions) {
    dispatch(actions);
};