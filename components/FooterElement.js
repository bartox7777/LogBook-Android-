import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FooterElement = ({ textValue, iconName, changeView, viewName }) => {
    return(
        <TouchableOpacity onPress={() => changeView(viewName)}>
            <View style={style.footerElement}>
                <Icon name={iconName} size={20} style={{textAlign: "center"}}/>
                <Text>{textValue}</Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    footerElement: {
        marginTop: 10,
    }
});

export default FooterElement;