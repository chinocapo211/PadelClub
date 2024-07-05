import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const TabLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
      <Feather name="bell" size={24} color="black" />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={styles.logo}
          />
        </View>
        <Feather name="user" size={30} color="black" style={styles.profileIcon} />
      </View>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarStyle: { height: 60 }, 
        tabBarLabelStyle: { marginBottom: 10 }, 
      }}>
        <Tabs.Screen
          name='home'
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} /> 
          }}
        />
        <Tabs.Screen
          name='historial'
          options={{
            tabBarLabel: 'Historial',
            tabBarIcon: ({ color }) => <Feather name="book" size={30} color={color} />
          }}
        />
        <Tabs.Screen
          name='ajustes'
          options={{
            tabBarLabel: 'Ajustes',
            tabBarIcon: ({ color }) => <Feather name="settings" size={30} color={color} /> // 
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    height: 120, // Tamaño predefinido del topSection
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    width: 100, // Ancho predefinido para el contenedor del logo
    height: '100%', // La altura del contenedor será la misma que la del topSection
    justifyContent: 'center', // Centra verticalmente la imagen
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  profileIcon: {
    // Estilos opcionales para el icono de perfil
  },
});


export default TabLayout;
