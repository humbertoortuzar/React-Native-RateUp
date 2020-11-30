import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Title, Button } from 'react-native-paper';
import filmsService from '../../services/films';

export default function FilmScreen({ route, navigation }) {
  const { film } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Title> {film.attributes.title}  </Title>
        <Image style={styles.image} source={{ uri: film.attributes.cover ? film.attributes.cover : 'https://i.vimeocdn.com/portrait/13317795_640x640' }} />
        <Text>Year: {film.attributes.year}</Text>
        <Text>Description: {film.attributes.description} </Text>
      </View>
      <Button onPress={() => {
        filmsService.deleteFilm(film.id);
        navigation.goBack();
        }}> Delete </Button>
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