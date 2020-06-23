import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert} from "react-native";
import Header from "./components/Header"
import Footer from "./components/Footer";
import SubjectsList from "./components/SubjectsList";
import AddNewSubject from "./components/AddNewSubject";
import AddGrade from "./components/AddGrade";
import uuid from "short-uuid";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-community/async-storage';


const App = () => {
  const [subjects, setSubjects] = useState([]);

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('@subjects', JSON.stringify(data))
      // alert('Data successfully saved')
    } catch (e) {
      // alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const subjects = await AsyncStorage.getItem('@subjects')
      if (subjects !== null) {
        setSubjects(JSON.parse(subjects));
      } else{
        setSubjects([]);
      }
    } catch (e) {
      // alert('Failed to fetch the data from storage')
    }
  }

  useEffect(() => {
    readData();
  }, []);

  const [viewName, setViewName] = useState("grades");
  const [tempSubjectId, setTempSubjectId] = useState(null);
  // const [idToShow, setIdToShow] = useState(null);
  const changeView = (newViewName) => {
    setViewName(newViewName);
  };

  const addSubject = (subjectName) => {
    const newSubject = {
      id: uuid.generate(),
      name: subjectName,
      gradesInfo: [],
      // meanFunc: meanFunc
    }
    const newSubjects = subjects;
    newSubjects.push(newSubject);
    setSubjects(newSubjects);
    saveData(subjects);
    setViewName("grades");
  };

  const deleteSubject = (id) => {
    Alert.alert(
      "Usuń przedmiot",
      "Czy na pewno chcesz trwale usunąć przemiot wraz z ocenami?",
      [
        {
          text: "Tak",
          onPress: () => {
            const newSubjects = subjects.filter((subject) => subject.id !== id);
            setSubjects(newSubjects);
            saveData(subjects);
          }
        },
        {
          text: "Anuluj",
          onPress: () => {console.log("Cancel")}
        }
      ],
      { cancelable: true }
    );
  };

  const addGradeView = (id) => {
    setTempSubjectId(id);
    setViewName("addGradeView");
  };

  const addGrade = (id, data) => {
    setViewName("grades");
    const newSubjects = subjects;
    newSubjects.forEach( (subject) => {
      if (subject.id === id)
        subject.gradesInfo.unshift(data);
      setSubjects(newSubjects);
      saveData(subjects);
    } );
  };

  const deleteGrade = (id) => {
    Alert.alert(
      "Usuń ocenę",
      "Czy na pewno chcesz trwale usunąć ocenę?",
      [
        {
          text: "Tak",
          onPress: () => {
            setSubjects((subjects) =>
              subjects.map((subject) => {
                subject.gradesInfo = subject.gradesInfo.filter((grade) => grade.id !== id);
                return subject;
              })
            );
            saveData(subjects);
          }
        },
        {
          text: "Anuluj",
          onPress: () => {console.log("Cancel")}
        }
      ],
      { cancelable: true }
    );
  };

  const view = {
    "grades": <SubjectsList subjectsArray={subjects} deleteSubject={deleteSubject} addGradeView={addGradeView} deleteGrade={deleteGrade} />,
    "newSubject": <KeyboardAwareScrollView keyboardShouldPersistTaps="always"><AddNewSubject addSubject={addSubject}/></KeyboardAwareScrollView>,
    "addGradeView": <KeyboardAwareScrollView keyboardShouldPersistTaps="always"><AddGrade id={tempSubjectId} addGrade={addGrade} /></KeyboardAwareScrollView>
  };

  return(
    <View style={style.container}>
      <Header />
        {view[viewName]}
      <Footer changeView={changeView}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;