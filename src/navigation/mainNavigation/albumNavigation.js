import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumListScreen from '../../screens/albums/AlbumListScreen';
import AlbumScreen from '../../screens/albums/AlbumScreen';
import { Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';



const Stack = createStackNavigator();

export default function AlbumNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Albums' component={AlbumListScreen} options={{
        headerLeft: () => (
          <IconButton
              onPress={() => props.navigation.toggleDrawer()}
              icon="menu"
              color={Colors.black}
              size={20}
            />
        )
      }}/>
      <Stack.Screen name='Album' component={AlbumScreen} />
    </Stack.Navigator>
  );
}
