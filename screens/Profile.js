import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDBB30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#002D62',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;