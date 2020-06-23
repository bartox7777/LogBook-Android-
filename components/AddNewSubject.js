import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import * as Animatable from "react-native-animatable";

const AddNewSubject = ({ addSubject }) => {
    const [subjectName, setSubjectName] = useState("");

    return(
            <View style={style.addSubjectStyle}>
                <Animatable.View animation="slideInUp">
                    <View style={style.formView}>
                        <TextInput
                            maxLength={20}
                            style={style.inputStyle}
                            autoCorrect={true}
                            placeholder="Nazwa przedmiotu"
                            onChangeText={ (text) => setSubjectName(text) }
                            value={subjectName} />
                        <Button title="Dodaj przedmiot" onPress={() => {
                                if (subjectName)
                                    addSubject(subjectName)
                                else
                                    Alert.alert("Informacja", "Nazwa przedmiotu nie może być pusta", [{text: "Ok", onPress: () => {console.log("Ok")}}], { cancelable: true });
                            }}/>
                    </View>
                </Animatable.View>
            </View>
    );
};

const style = StyleSheet.create({
    addSubjectStyle: {
        flex: 9,
    },
    formView: {
        margin: 100,
        alignSelf: "center",
        width: 300,
        minHeight: 200
    },
   inputStyle: {
        borderBottomWidth: 3,
        textAlign: "center",
        fontSize: 20,
        marginBottom: 40
    },
});

export default AddNewSubject;