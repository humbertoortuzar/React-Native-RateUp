import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, ScrollView, FlatList } from 'react-native';
import playlistsService from '../../services/playlists';
import {Picker} from '@react-native-picker/picker';
import { Button } from 'react-native-paper';

export default function AddSongToPlaylistScreen({ navigation, route }) {
  const { song } = route.params;
  const [playlists, setPlaylists] = useState([]);
  const [chosenPlaylist, setChosenPlaylist] = useState(0);

  useEffect(() => {
    playlistsService.getMyPlaylists()
    .then((playlists) => setPlaylists(playlists))
    .catch(console.log);
  }, []);
  return (
    <View style={styles.container}>
          <Picker
            selectedValue={chosenPlaylist}
            onValueChange={(itemValue, itemIndex) =>
              setChosenPlaylist(itemValue)
            }>
            {
              playlists.map((p) => (
                <Picker.Item label={p.attributes.name} value={p.attributes.id} />
              ))
            }
          </Picker>
          <Button 
            mode="contained" 
            style={[styles.formElement, styles.button]} 
            onPress={() => {
              const response = playlistsService.addSongToPlaylist(song.attributes.id, chosenPlaylist);
              if (response) {
                Alert.alert('Song Created Succesfuly')
                navigation.goBack();
              } else {
                Alert.alert("There's been an error adding the song")
              }
            }}
          >
            Add Song
          </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    alignSelf: 'center'    
  },
  formElement: {
    marginVertical: 5,
  },
  input: {
    backgroundColor: '#fff',
  },
  button: {
    padding: 5,
  }
});