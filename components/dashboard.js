import React from 'react';

import { StyleSheet, View, Button, SafeAreaView, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase'
require('firebase/auth')


const state = { uid: '' };

const Separator = () => (
  <View style={styles.separator} />
);

const SubSeparator = () => (
    <View style={styles.subseparator} />
  );

const signOut = (props) => {
    firebase.auth().signOut().then(() => {
      props.navigation.navigate('Login')      
    })
  }  


const Dashboard = (props) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Personas a Cargo
      </Text>
      <Button
        title="Agregar"
        color="green"
        onPress={() => props.navigation.navigate('Addpatient') }
      />
      <SubSeparator/>
      <Button
        title="Ver Todos"
        color="blue"
        onPress={() => Alert.alert('Ver Todos pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Medicamentos
      </Text>
      <Button
        title="Agregar"
        color="gray"
        onPress={() => props.navigation.navigate('AddMedicine') }
      />
      <SubSeparator/>
      <Button
        title="Ver Todos"
        color="lightblue"
        onPress={() => props.navigation.navigate('MedicineList') }
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Opciones
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Salir"
          color = "black"
          onPress={() => signOut(props)}
          icon={
            <Icon
              name="arrow"
              size={15}
              color="white"
            />
          }
       />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  subseparator: {
    marginVertical: 8,
  },
});

export default Dashboard;