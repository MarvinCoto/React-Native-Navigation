import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  //Defino una constante para utilizar la función de navegación
  const navigation = useNavigation();

  //Creo una función para navegar hacía el apartado de perfil
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.moduleBox}>
        
        <Text style={styles.moduleTitle}>Desarrollo de componentes para dispositivos móviles</Text>
        <Text style={styles.moduleDescription}>
          Módulo para el desarrollo de aplicaciones móviles con las herramientas de React Native con Expo
        </Text>

        {/*Boton para navegar hacía el apartado de perfil*/}
        <TouchableOpacity style={styles.button} onPress={goToProfile}>
          <Text style={styles.buttonText}>Ir al perfil</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

//Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002D62',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  moduleBox: {
    backgroundColor: '#FDBB30',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    maxWidth: 320,
  },
  moduleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#002D62',
    marginBottom: 10,
    textAlign: 'center',
  },
  moduleDescription: {
    fontSize: 16,
    color: '#002D62',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#002D62',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FDBB30',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;