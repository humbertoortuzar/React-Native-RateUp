import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';
import playlistsService from '../../services/playlists';

export default function MyPlaylistListScreen({ navigation }) {

  const [playlistList, setPlaylistList] = useState([]);

  useEffect(() => {
    playlistsService.getMyPlaylists()
    .then((playlists) => setPlaylistList(playlists))
    .catch(console.log);
  }, []);

  const PlaylistCard = ({ item }) => (
    <Card style={styles.card} onPress={()=>navigation.navigate('Playlist', {playlist: item})}>
      <Card.Content>
        <Title>{item.attributes.name}</Title>  
      </Card.Content>  
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList data={playlistList} keyExtractor={(item) => item.attributes.id.toString()} renderItem={PlaylistCard} />
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
