import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';



const CardPlato2 = ({ plato, onAdd }) => {
  const handleAdd = () => {
    onAdd(plato)
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleAdd}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: plato.image }} style={styles.image} />
        </View>
        <Text style={styles.title}>{plato.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 2,
    width: 400,
    height: 60,
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
    width: 60,
    height: 60,
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
  buttonContainer: {
    flexDirection: 'column', // Botones uno encima del otro
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: '80%'
  },
  navigateToPlatoPageButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: '80%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CardPlato2;
