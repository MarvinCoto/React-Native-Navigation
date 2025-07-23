import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ nombre, edad, foto }) => {
  return (
    <View style={styles.card}>
      <Image
        source={foto}
        style={styles.photo}
        resizeMode="cover"
      />
      <Text style={styles.textLabel}>Nombre completo:</Text>
      <Text style={styles.textValue}>{nombre}</Text>
      
      <Text style={styles.textLabel}>Edad:</Text>
      <Text style={styles.textValue}>{edad}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDBB30', 
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: 320,
    marginBottom: 20
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  textLabel: {
    color: '#002D62',
    fontWeight: '600',
    fontSize: 16,
  },
  textValue: {
    color: '#002D62',
    fontSize: 18,
    marginBottom: 12,
  },
});

export default ProfileCard;