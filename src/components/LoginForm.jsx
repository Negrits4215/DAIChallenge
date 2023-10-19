import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Campos vacíos', 'Por favor, complete todos los campos.');
    } else {
      setLoading(true);

      try {
        const response = await fetch('http://challenge-react.alkemy.org', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          // Almacena el token en el contexto o AsyncStorage
          setLoading(false);
          navigation.navigate('MenuPag');
        } else {
          // Manejar error de la API
          alert('Error', 'Hubo un problema al iniciar sesión.');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        // Manejar errores de red u otros errores
        alert('Error', 'Hubo un problema al iniciar sesión.');
        setLoading(false);
      }
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title="Enviar"
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    searchInput: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
});

export default LoginForm;
