import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';
import albumsService from '../../services/albums'; 



export default function AlbumListScreen({ navigation }) {

  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    albumsService.getAlbums()
    .then((albums) => setAlbumList(albums))
    .catch(console.log);
  }, []);

  const AlbumCard = ({ item }) => (
    <Card style={styles.card} onPress={()=>navigation.navigate('Album', {album: item})}>
      <Card.Cover source={{uri: item.attributes.cover ? item.attributes.cover : 'https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-mobileMasterAt3x.jpg'}}/>
      <Card.Content>
        <Title>{item.attributes.title}</Title>  
      </Card.Content>  
    </Card>
    
  );
  //console.log(songList);

  return (
    <View style={styles.container}>
      <FlatList data={albumList} keyExtractor={(item) => item.attributes.id.toString()} renderItem={AlbumCard} />
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
