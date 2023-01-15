import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';
import HomePage from './HomePage';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    setLoggedIn(true);
  };

  return (
    <View>
      {loggedIn ? (
        <HomePage />
      ) : (
        <View>
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 200, height: 200 }}
          />
          <Text>HomePage</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

export default App;
