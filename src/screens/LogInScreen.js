
import React, {useState} from 'react';
import { StyleSheet, View  } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';



export default function LogInScreen({ handleLogin }) {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  return (
    <View style={styles.container}>
        <View>
          <Title style={styles.title}> RateUp </Title>
          <TextInput 
            label="E-mail" 
            placeholder="email@email.com" 
            autoCapitalize="none"
            value={data.email} 
            onChangeText={(text) => setData({...data, email: text})}
            style={[styles.formElement, styles.input]}
          />
          <TextInput 
            label="Password" 
            value={data.password} 
            autoCapitalize="none"
            onChangeText={(text) => setData({...data, password: text})} 
            secureTextEntry={true}
            style={[styles.formElement, styles.input]}
          />
          <Button 
            mode="contained" 
            style={[styles.formElement, styles.button]} 
            onPress={() => handleLogin(data) }
          >
            Log In
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
