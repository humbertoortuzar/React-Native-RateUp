import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Title } from 'react-native-paper';

export default function FilmScreen({ route }) {
  const { album } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Title> {album.attributes.title}  </Title>
        <Image style={styles.image} source={{ uri: album.attributes.cover ? album.attributes.cover : 'https://i.vimeocdn.com/portrait/13317795_640x640' }} />
        <Text>Year: {album.attributes.year}</Text>
        <Text>Genre: {album.attributes.genre} </Text>
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