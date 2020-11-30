
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, FlatList } from 'react-native';


export default function MainScreen({  }) {
    //const {email} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text> Main Screen </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
