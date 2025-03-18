import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para los íconos

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Control IoT</Text>
      <Text style={styles.subtitle}>Administra tu dispensador de comida y agua para mascotas.</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <MaterialCommunityIcons name="food" size={40} color="#ff6600" />
          <Text style={styles.cardTitle}>COMIDA</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Estado Contenedor de Comida:</Text>
            <Text style={styles.status}>🟢 Llena</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🍽 DISPENSAR COMIDA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="water" size={40} color="#ff6600" />
          <Text style={styles.cardTitle}>AGUA</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Estado Contenedor de Agua:</Text>
            <Text style={styles.status}>🟢 Llena</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>💧 DISPENSAR AGUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcefd4',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    width: 160,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6600',
    marginVertical: 5,
  },
  statusContainer: {
    backgroundColor: '#e6f7e6',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    color: '#333',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d8b2d',
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});