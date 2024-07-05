import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const screenWidth = Dimensions.get('window').width;

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonFriends]}>
          <Text style={styles.buttonText}>Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonTournaments]}>
          <Text style={styles.buttonText}>Torneos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonPlay]}>
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
    alignItems: 'center',
    padding: 20, // Ajusta el padding como desees
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center', // Alinea los botones al centro horizontalmente
    justifyContent: 'flex-start', // Alinea los botones al principio verticalmente
    width: '80%', // Ancho del contenedor de botones
    maxWidth: 400, // Ancho máximo para mantener la responsividad
  },
  button: {
    height: 130, // Altura base para los botones
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Borde redondeado para los botones
    marginBottom: 10, // Espacio entre botones
    width: '130%', // Ancho completo del contenedor
  },
  buttonPlay: {
    backgroundColor: '#00BFFF', // Color celeste para el botón de Jugar
    height: 150, // Altura específica para este botón
  },
  buttonTournaments: {
    backgroundColor: '#FF69B4', // Color rosa para el botón de Torneos
    height: 150, // Altura específica para este botón
  },
  buttonFriends: {
    backgroundColor: '#32CD32', // Color verde para el botón de Amigos
    height: 150, // Altura específica para este botón
  },
  buttonText: {
    color: 'white',
    fontSize: 35, // Tamaño de fuente para el texto de los botones
  },
});
