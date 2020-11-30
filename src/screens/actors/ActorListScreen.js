import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';
import actorsService from '../../services/actors'; 



export default function ActorListScreen({ navigation }) {

  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    actorsService.getActors()
    .then((actors) => setActorList(actors))
    .catch(console.log);
  }, []);

  const ActorCard = ({ item }) => (
    <Card style={styles.card} onPress={()=>navigation.navigate('Actor', {actor: item})}>
      <Card.Cover source={{uri: item.attributes.photo ? item.attributes.photo : 'https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-mobileMasterAt3x.jpg'}}/>
      <Card.Content>
        <Title>{item.attributes.name}</Title>
      </Card.Content>  
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList data={actorList} keyExtractor={(item) => item.attributes.id.toString()} renderItem={ActorCard} />
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
