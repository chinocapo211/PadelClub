import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const screenWidth = Dimensions.get('window').width;

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPlay]}>
          <Text style={styles.buttonText}>Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonTournaments]}>
          <Text style={styles.buttonText}>Torneos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonFriends]}>
          <Text style={styles.buttonText}>Amigos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    margin:0,
    marginBottom:50
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    height: 130, // Mantener la misma altura para todos los botones
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    marginBottom: 5, // Añadido un pequeño margen inferior entre los botones
  },
  buttonPlay: {
    backgroundColor: '#00BFFF', // Celeste
    width: screenWidth * 0.6, // 60% del ancho de la pantalla
  },
  buttonTournaments: {
    backgroundColor: '#FF69B4', // Rosa
    width: screenWidth * 0.53, // 53% del ancho de la pantalla
  },
  buttonFriends: {
    backgroundColor: '#32CD32', // Verde
    width: screenWidth * 0.46, // 46% del ancho de la pantalla
  },
  buttonText: {
    color: 'white',
    fontSize: 24, // Aumentamos el tamaño de la letra
  },
});

