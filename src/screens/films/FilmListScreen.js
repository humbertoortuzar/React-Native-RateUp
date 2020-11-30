import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import filmsService from '../../services/films';



export default function FilmListScreen({ navigation }) {

  const [filmList, setFilmList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    filmsService.getFilms()
    .then((films) => setFilmList(films))
    .catch(console.log);
  }, [isFocused]);

  const FilmCard = ({ item }) => (
    <Card style={styles.card} onPress={()=>navigation.navigate('Film', {film: item})}>
      <Card.Cover source={{uri: item.attributes.cover ? item.attributes.cover : 'https://i.vimeocdn.com/portrait/13317795_640x640'}}/>
      <Card.Content>
        <Title>{item.attributes.title}</Title>  
      </Card.Content>  
    </Card>
    
  );

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('addFilm')}> Add Film </Button>
      <FlatList data={filmList} keyExtractor={(item) => item.attributes.id.toString()} renderItem={FilmCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    //alignItems: 'center'
  },
  card: {
    margin: 10,
  }
});
