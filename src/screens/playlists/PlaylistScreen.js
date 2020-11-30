import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, FlatList, SafeAreaView } from 'react-native';
import playlistsService from '../../services/playlists';

export default function PlaylistScreen({ route, navigation }) {
  const { playlist } = route.params;
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    playlistsService.getPlaylistSongs(playlist.attributes.id)
    .then((songs) => setSongs(songs))
    .catch(console.log);
  }, []);

  const SongItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text> {item.attributes.title} </Text>
      </View>
    );
  };
  console.log(songs);
  return (
    <View style={styles.container}>
      <Text> Nombre: {playlist.attributes.name}  </Text>
      <Text> Categoría: {playlist.attributes.category} </Text>
      <Text> Descripción: {playlist.attributes.description} </Text>
      
      <FlatList data={songs} renderItem={SongItem} keyExtractor={item => item.attributes.id} style={styles.list} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  list: {
    margin: 20
  },
  item: {
    padding: 20,
  }
});