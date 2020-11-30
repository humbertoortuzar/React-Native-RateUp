import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistListScreen from '../../screens/playlists/PlaylistListScreen';
import PlaylistScreen from '../../screens/playlists/PlaylistScreen';
import { Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';



const Stack = createStackNavigator();

export default function PlaylistNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Playlists' component={PlaylistListScreen} options={{
        headerLeft: () => (
          <IconButton
              onPress={() => props.navigation.toggleDrawer()}
              icon="menu"
              color={Colors.black}
              size={20}
            />
        )
      }}/>
      <Stack.Screen name='Playlist' component={PlaylistScreen} />
    </Stack.Navigator>
  );
}
