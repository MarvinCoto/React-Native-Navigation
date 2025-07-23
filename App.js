import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';

//Creo una constante para utilizar el stack de navegación
const Stack = createStackNavigator();

export default function App() {
  return (
    //Defino el contenedor para la navegación
    <NavigationContainer>
      {/*Defino la pantalla que se abrirá cuando se ejecute la aplicación*/}
      <Stack.Navigator initialRouteName="Home">
        {/*Defino las rutas de la aplicación*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Estilos generales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
