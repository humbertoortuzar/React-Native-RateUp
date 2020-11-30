import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import filmsService from '../../services/films';

/*
{
  "data": {
      "type": "films",
      "attributes": {
          "title": "title",
          "year": 1990,
          "genre": "genre",
          "description": "alalalalala"
      }
  }
}
*/
export default function AddFilmScreen({ navigation }) {
  const [data, setData] = useState({
    title: '',
    year: 0,
    genre: '',
    description: '',
  })

  return (
    <View style={styles.container}>
        <View>
          <Title style={styles.title}> RateUp </Title>
          <TextInput 
            label="Title" 
            placeholder="Title" 
            value={data.title} 
            onChangeText={(text) => setData({...data, title: text})}
            style={[styles.formElement, styles.input]}
          />
          <TextInput 
            label="Genre" 
            value={data.genre} 
            onChangeText={(text) => setData({...data, genre: text})} 
            style={[styles.formElement, styles.input]}
          />
          <TextInput 
            label="Year"
            keyboardType = 'number-pad' 
            value={data.year} 
            onChangeText={(text) => setData({...data, year: parseInt(text)})} 
            style={[styles.formElement, styles.input]}
          />
          <TextInput 
            label="Description" 
            value={data.description} 
            onChangeText={(text) => setData({...data, description: text})} 
            style={[styles.formElement, styles.input]}
          />
          <Button 
            mode="contained" 
            style={[styles.formElement, styles.button]} 
            onPress={() => {
              const response = filmsService.addFilm(data);
              if (response) {
                Alert.alert('Film Created Succesfuly')
                navigation.goBack();
              } else {
                Alert.alert("There's been an error publishing the film")
              }
            }}
          >
            Add Film
          </Button>
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