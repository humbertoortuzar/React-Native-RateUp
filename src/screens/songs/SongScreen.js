import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, FlatList } from 'react-native';

export default function SongScreen({ route, navigation }) {
  const { song } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text> This Song is: {song.attributes.title}  </Text>
        <Button title="Add Song to Playlist" onPress={() => navigation.navigate('AddSong', { song })}/>
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