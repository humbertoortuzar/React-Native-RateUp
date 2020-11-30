import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActorListScreen from '../../screens/actors/ActorListScreen';
import ActorScreen from '../../screens/actors/ActorScreen';
import { Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


const Stack = createStackNavigator();

export default function ActorNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Actors' component={ActorListScreen} options={{
        headerLeft: () => (
          <IconButton
              onPress={() => props.navigation.toggleDrawer()}
              icon="menu"
              color={Colors.black}
              size={20}
            />
        )
      }}/>
      <Stack.Screen name='Actor' component={ActorScreen} />
    </Stack.Navigator>
  );
}