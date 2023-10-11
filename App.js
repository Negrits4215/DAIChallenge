import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPag from './src/paginas/MenuPag';
import PlatoPag from './src/paginas/PlatoPag';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MenuPag' component={MenuPag}
          options={() => ({
            title: "MenuPag",
          })} />
        <Stack.Screen name='PlatoPag' component={PlatoPag}
          options={() => ({
            title: "PlatoPag",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
