import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const CardComponent = ({ plato, onDelete }) => {
  const handleDelete = () => {
    onDelete(plato.id); // Suponiendo que plato.id es el identificador único del plato que deseas eliminar
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: plato.image }} style={styles.image} />
        </View>
        <Text style={styles.title}>{plato.title}</Text>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Cambiar la dirección a 'row'
    flexWrap: 'wrap', // Permitir que las tarjetas se envuelvan a la siguiente línea
    justifyContent: 'center', // Centrar horizontalmente en la pantalla
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    width: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '40%',
    padding: 4, 
    width: 200, 
    height: 200, 
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8, 
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CardComponent;
