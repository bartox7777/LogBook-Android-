import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
    return(
      <View style={style.header}>
        <Text style={style.text}>Mój dziennik</Text>
      </View>
    );
  };

const style = StyleSheet.create({
    header: {
        backgroundColor: "#eb636f",
        alignItems: "stretch",
        flexDirection: "row",
        flex: 2,
        maxHeight: 60
    },
    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
      marginLeft: 10,
      alignSelf: "center"
    },
    logo: {
      color: "#f5e170",
    }
});

export default Header;