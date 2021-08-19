// components/dashboard.js

import React, { Component } from 'react';
import { VirtualizedList } from 'react-native';
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';

const Separator = () => (
  <View style={styles.separator} />
);

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.container}></View>
          <View>
            <Text style = {styles.textStyle}>
              Hello, {this.state.displayName}
            </Text>
            <Button style = {styles.boton}
              color="#3740FE"
              title="+ Dependiente"
              onPress={() => this.signOut()}
            />
            <Separator />
            <Button
              margin= "35"
              color="#3740FE"
              title="Logout"
              onPress={() => this.signOut()}
            />
            </View>
            <View>
              <View style={styles.fixToText}>
                <Button
                  title="Left button"
                  onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                  title="Right button"
                  onPress={() => Alert.alert('Right button pressed')}
                />
              </View>
            </View>
      </SafeAreaView>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
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

});