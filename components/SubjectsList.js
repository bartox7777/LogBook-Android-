import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SubjectsListElement from "./SubjectsListElement";
import * as Animatable from "react-native-animatable";
import uuid from "short-uuid";

const SubjectsList = ({ subjectsArray, deleteSubject, addGradeView, deleteGrade }) => {
    const subjectsInComponents = subjectsArray.map( (subject) => {return <SubjectsListElement subject={subject} key={uuid.generate()} deleteSubject={deleteSubject} addGradeView={addGradeView} deleteGrade={deleteGrade} />} );
    return(
            <View style={style.subjectsListStyle}>
                <Animatable.View animation="slideInUp">
                    <ScrollView>
                        {subjectsInComponents}
                    </ScrollView>
                </Animatable.View>
            </View>
    );
};


const style = StyleSheet.create({
    subjectsListStyle: {
        flex: 9
    }
});

export default SubjectsList;
