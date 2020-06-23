import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import * as Animatable from "react-native-animatable";
import uuid from "short-uuid";

const AddGrade = ({ id, addGrade }) => {
    const [gradeName, setGradeName] = useState("");
    const [gradeValue, setGradeValue] = useState();
    const [gradeWeight, setGradeWeight] = useState();

    return(
        <View style={style.addGradeStyle}>
            <Animatable.View animation="slideInUp">
                <View style={style.formView}>
                    <TextInput
                        maxLength={20}
                        style={style.inputStyle}
                        placeholder="Nazwa oceny"
                        onChangeText={ (text) => setGradeName(text) }
                        value={gradeName} />
                    <TextInput
                        maxLength={1}
                        style={style.shortInputStyle}
                        placeholder="Ocena"
                        onChangeText={ (text) => setGradeValue(text) }
                        value={gradeValue}
                        keyboardType="decimal-pad" />
                    <TextInput
                        maxLength={1}
                        style={style.shortInputStyle}
                        placeholder="Waga oceny"
                        onChangeText={ (text) => setGradeWeight(text) }
                        value={gradeWeight} />
                    <Button title="Dodaj ocenę" onPress={() => {
                            const date = new Date();
                            const data = {
                                "id": uuid.generate(),
                                "name": gradeName,
                                "grade": parseInt(gradeValue),
                                "weight": parseInt(gradeWeight),
                                "date": date.getDate()  + "." + date.getMonth() + "." + date.getFullYear()
                            };
                            addGrade(id, data);
                        }}/>
                </View>
            </Animatable.View>
        </View>
    );
};

const style = StyleSheet.create({
    addGradeStyle: {
        flex: 9,
    },
    formView: {
        margin: 100,
        alignSelf: "center",
        width: 300
    },
   inputStyle: {
        borderBottomWidth: 3,
        textAlign: "center",
        marginBottom: 40,
    },
    shortInputStyle: {
        borderBottomWidth: 3,
        textAlign: "center",
        fontSize: 15,
        marginBottom: 40,
        alignSelf: "center",
        width: 100
    },
});

export default AddGrade;