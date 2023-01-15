import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable , StyleSheet } from 'react-native';
import HomePage from './HomePage';

export default function App(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const { onPress, title = 'Sync up' } = props;
  const handleLogin = () => {
    // Add your authentication logic here
    setLoggedIn(true);
  };
  return (
    <View style={styles.container}>
           {loggedIn ? (
        <HomePage />
      ) : (
        <View style={styles.loginContainer}>
        <Text style={styles.welcome}>Welcome</Text>
          <Image
            source={require('./assets/plant.png')}
            style={styles.image}
          />
          <Text style={styles.header}>Smart Plant Link</Text>
          <TextInput
            placeholder="Device ID"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            keyboardType='email-address'
            onSubmitEditing={() => { this.passwordInput.focus(); }}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
            
          />
          <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>{title}</Text>
    </Pressable>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle:'',
    borderColor:'#fff',
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 276,
    height: 201,
    marginBottom: 20,
    borderRadius:10,
  },
  image: {
    width: 276,
    height: 201,
    marginBottom: 20,
    borderRadius:10,
  },
  welcome: {
    color:'#E0E0E0',
    fontSize: 14,
    marginBottom: 20,
  },
  header: {
    color:'#E0E0E0',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    color:'#E0E0E0',
    backgroundColor:'#212121',
    width: '80%',
    height: 40,
    borderColor:'gray',
    borderRadius:20,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#0091EA',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
