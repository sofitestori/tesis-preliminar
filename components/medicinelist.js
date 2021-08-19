import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const Medicinelist = (props) => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    firebase.db.collection("medicine").onSnapshot((querySnapshot) => {
      const medicines = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, count, day, time, patient } = doc.data();
        medicines.push({
          id: doc.id,
          name,
          count,
          day,
          time,
          patient,
        });
      });
      setMedicines(medicines);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("AddMedicine")}
        title="Agregar"
      />
      {medicines.map((medicine) => {
        return (
          <ListItem
            key={medicine.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("Medicinedetail", {
                medicineId: medicine.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxykEK-IzktEuXCLZrtnm9ObFdNGcl0DImvweOu3JuJ2toPjXFTv0h3fszW1qPUEF6w7M&usqp=CAU",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{medicine.name}</ListItem.Title>
              <ListItem.Subtitle>{medicine.count}</ListItem.Subtitle>
              <ListItem.Subtitle>{medicine.day}</ListItem.Subtitle>
              <ListItem.Subtitle>{medicine.time}</ListItem.Subtitle>
              <ListItem.Title>{medicine.patient}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default Medicinelist;
