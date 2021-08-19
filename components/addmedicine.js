import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";
require('firebase/auth')

const AddMedicine = (props) => {
  const initalState = {
    name: "",
    count: "",
    day: "",
    time: "",
    patient: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveMedicine = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("medicine").add({
          name: state.name,
          count: state.count,
          day: state.day,
          time: state.time,
          patient: state.patient
        });

        props.navigation.navigate("Dashboard");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="cantidad"
          onChangeText={(value) => handleChangeText(value, "count")}
          value={state.count}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="dia"
          onChangeText={(value) => handleChangeText(value, "day")}
          value={state.day}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="hora"
          onChangeText={(value) => handleChangeText(value, "time")}
          value={state.time}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="paciente"
          onChangeText={(value) => handleChangeText(value, "patient")}
          value={state.patient}
        />
      </View>

      <View style={styles.button}>
        <Button title="Guardar" onPress={() => saveMedicine()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddMedicine;
