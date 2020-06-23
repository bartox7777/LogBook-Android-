import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import SubjectGrades from "./SubjectGrades";
import Icon from "react-native-vector-icons/MaterialIcons";

const SubjectsListElement = ({ subject, deleteSubject, addGradeView, deleteGrade }) => {
    let [show, setShow] = useState(false);
    
    let numerator, denominator;
    const meanFunc = function(gradesInfo) {
    numerator = denominator = 0;
    gradesInfo.forEach( (gradeInfo) => {numerator += gradeInfo.grade*gradeInfo.weight; denominator+=gradeInfo.weight} )
    if (!denominator)
        denominator = 1;
    return Math.round((numerator / denominator) * 100) / 100;
    }

    return(
        <>
            <TouchableOpacity onPress={() => {setShow(!show)}}>
                <View style={style.subject}>
                    <View>
                        <Text style={style.subjectName}>{subject.name}</Text>
                        <Text style={style.subjectInfo}>Średnia: {meanFunc(subject.gradesInfo)}   Ocen: {subject.gradesInfo.length}</Text>
                    </View>
                    <View style={style.icon}>
                        <TouchableOpacity onPress={ () => deleteSubject(subject.id)}>
                            <Icon name="delete-forever"  size={40} color="red"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
            <SubjectGrades grades={subject.gradesInfo} show={show} addGradeView={() => addGradeView(subject.id)} deleteGrade={deleteGrade} />
        </>
    );
};

const style = StyleSheet.create({
    subject: {
        padding: 20,
        borderTopColor: "gray",
        borderTopWidth: 1,
        backgroundColor: "#e4e4e4",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subjectName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subjectInfo: {
        color: "gray",
        marginTop: 3
    },
    icon: {
        flexDirection: "row",
        alignItems: "center",
    }
});

export default SubjectsListElement;
