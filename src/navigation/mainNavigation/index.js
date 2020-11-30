import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SongNavigation from './songNavigation';
import FilmNavigation from './filmNavigation';
import AlbumNavigation from './albumNavigation';
import ActorNavigation from './actorNavigation';
import PlaylistNavigation from './playlistNavigation';
import MyPlaylistNavigation from './myPlaylistNavigation';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

/*
const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Songs') {
            iconName = focused ? 'ios-musical-note' : 'ios-musical-note';
          } else if (route.name === 'Films') {
            iconName = focused ? 'ios-film' : 'ios-film';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Albums" component={AlbumNavigation} />
        <Tab.Screen name="Songs" component={SongNavigation} />
        <Tab.Screen name="Films" component={FilmNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Albums">
        <Drawer.Screen name="Actors" component={ActorNavigation} />
        <Drawer.Screen name="Albums" component={AlbumNavigation} />
        <Drawer.Screen name="Films" component={FilmNavigation} />
        <Drawer.Screen name="Playlists" component={PlaylistNavigation} />
        <Drawer.Screen name="My Playlists" component={MyPlaylistNavigation} />
        <Drawer.Screen name="Songs" component={SongNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}