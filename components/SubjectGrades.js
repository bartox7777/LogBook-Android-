import React from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialIcons";

const SubjectGrades = ({ grades, show, addGradeView, deleteGrade }) => {
    if (show){
        return(
            <Animatable.View animation="bounceIn">
                <View>
                    <TouchableOpacity onPress={addGradeView}>
                        <View style={style.addGradeStyle}>
                            <Text style={{textAlign: "center", fontSize: 15, fontWeight: "bold"}}>Dodaj ocenę</Text>
                        </View>
                    </TouchableOpacity>
                    <FlatList data={grades} renderItem={({ item }) => <View style={style.gradeElementStyle}>
                            <Text style={style.gradeStyle}>{item.grade}</Text>
                            <View style={style.gradeInfo}>
                                <Text style={style.nameStyle}>{item.name}</Text>
                                <Text style={style.additionalInfoStyle}>{item.date}    Waga: {item.weight}</Text>
                            </View>
                            <TouchableOpacity style={style.icon} onPress={() => deleteGrade(item.id)}>
                                <Icon name="delete" size={30} color={"darkred"} />
                            </TouchableOpacity>
                        </View>} />
                </View>
            </Animatable.View>
        );
    }
    else{
        return(
            null
        );
    }
};

const style = StyleSheet.create({
    gradeElementStyle: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#dadada",
        flexDirection: "row",
        // alignContent: "space-between"

    },
    gradeStyle: {
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "#98b73f",
        width: 50,
        height: 50,
        textAlign: "center",
        justifyContent: "center",
        paddingTop: 10,
        borderRadius: 20,
        color: "white"
    },
    nameStyle: {
        fontWeight: "bold",
        marginLeft: 100,
        textAlign: "center"
    },
    gradeInfo: {
        justifyContent: "space-between",
        flexDirection: "column"
    },
    additionalInfoStyle: {
        color: "gray",
        marginLeft: 100
    },
    addGradeStyle: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#dadada",
        backgroundColor: "#feffeb",
    },
    icon: {
        alignSelf: "center",
        marginLeft: "93%",
        position: "absolute"
    }
});

export default SubjectGrades;