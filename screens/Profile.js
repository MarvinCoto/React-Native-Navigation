import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProfileCard from '../components/ProfileCard.js';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  //Defino una constante para utilizar la función de navegación
  const navigation = useNavigation();
  
  //Creo una función para navegar hacía el apartado de perfil
  const goToProfile = () => {
    navigation.navigate('Home');
  };
  

  return (
    <View style={styles.container}>
        
      {/*Card del perfil definiendo los props*/}
      <ProfileCard nombre={'Marvin Javier Gutiérrez Coto'} edad={'17'} foto={require('../assets/foto.png')} />

      {/*Boton para navegar hacía el apartado de perfil*/}
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Ir al Home</Text> 
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#002D62',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: '#FDBB30',
    borderWidth: 2
  },
  buttonText: {
    color: '#FDBB30',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;