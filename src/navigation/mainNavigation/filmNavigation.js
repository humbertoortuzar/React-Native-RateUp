import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FilmListScreen from '../../screens/films/FilmListScreen';
import FilmScreen from '../../screens/films/FilmScreen';
import AddFilmScreen from '../../screens/films/addFilmScreen';
import { Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


const Stack = createStackNavigator();

export default function FilmNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Films' component={FilmListScreen} options={{
        headerLeft: () => (
          <IconButton
              onPress={() => props.navigation.toggleDrawer()}
              icon="menu"
              color={Colors.black}
              size={20}
            />
        )
      }}/>
      <Stack.Screen name='Film' component={FilmScreen} />
      <Stack.Screen name='addFilm' component={AddFilmScreen} />
    </Stack.Navigator>
  );
}
