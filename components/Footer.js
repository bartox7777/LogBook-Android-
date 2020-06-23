import React from "react";
import { View, StyleSheet } from "react-native";
import FooterElement from "./FooterElement";

const Footer = ({ changeView }) => {
    return(
        <View style={style.footer}>
            <FooterElement textValue="Oceny" iconName="book" changeView={changeView} viewName="grades"/>
            <FooterElement textValue="Dodaj przedmiot" iconName="book-plus" changeView={changeView} viewName="newSubject"/>
        </View>
    );
};

const style = StyleSheet.create({
    footer: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: "#69a6d2",
        justifyContent: "space-around",
        maxHeight: 60
    }
});

export default Footer;