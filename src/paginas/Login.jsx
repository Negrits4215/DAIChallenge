import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
        <View style={styles.container}>
            <Text>Iniciar sesión</Text>
            <LoginForm navigation={navigation} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      with: '%60',
      marginTop: 10
    },
  });

export default LoginScreen;
