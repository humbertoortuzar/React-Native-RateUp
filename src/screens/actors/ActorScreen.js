import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Title } from 'react-native-paper';

export default function ActorScreen({ route }) {
  const { actor } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Title> {actor.attributes.name}  </Title>
        <Image style={styles.image} source={{ uri: actor.attributes.photo ? actor.attributes.photo : 'https://i.vimeocdn.com/portrait/13317795_640x640' }} />
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
  image: {
    height: 400,
    width: 200,
  }
});