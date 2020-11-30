import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';
import songsService from '../../services/songs';  



export default function SongListScreen({ navigation }) {

  const [songList, setSongList] = useState([]);

  useEffect(() => {
    songsService.getSongs()
    .then((songs) => setSongList(songs))
    .catch(console.log);
  }, []);

  const SongCard = ({ item }) => (
    <Card style={styles.card} onPress={()=>navigation.navigate('Song', {song: item})}>
      <Card.Cover source={{uri: 'https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-mobileMasterAt3x.jpg'}}/>
      <Card.Content>
        <Title>{item.attributes.title}</Title>  
      </Card.Content>  
    </Card>
  );
  //console.log(songList);

  return (
    <View style={styles.container}>
      <FlatList data={songList} keyExtractor={(item) => item.attributes.id.toString()} renderItem={SongCard} />
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
