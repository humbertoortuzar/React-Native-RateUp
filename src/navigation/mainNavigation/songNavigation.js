import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SongListScreen from '../../screens/songs/SongListScreen';
import SongScreen from '../../screens/songs/SongScreen';
import AddSongToPlaylistScreen from '../../screens/songs/AddSongToPlaylistScreen';
import { Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const Stack = createStackNavigator();

export default function SongNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Songs' component={SongListScreen} options={{
        headerLeft: () => (
          <IconButton
              onPress={() => props.navigation.toggleDrawer()}
              icon="menu"
              color={Colors.black}
              size={20}
            />
        )
      }}/>
      <Stack.Screen name='Song' component={SongScreen} />
      <Stack.Screen name='AddSong' component={AddSongToPlaylistScreen} />
    </Stack.Navigator>
  );
}
