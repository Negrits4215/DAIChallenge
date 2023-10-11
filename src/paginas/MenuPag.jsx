import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import PlatoC from '../components/PlatoCard';
import mockData from '../mocks/data';

const MenuPag = ({ route }) => {
  const data = mockData.results;
  const [busqueda, setBusqueda] = useState(''); // Estado para el término de búsqueda
  const [listaFiltrada, setListaFiltrada] = useState(data); // Estado para los resultados de la búsqueda

  // Función para realizar la búsqueda
  const handleSearch = (text) => {
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setBusqueda(text);
    setListaFiltrada(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar plato por título"
        value={busqueda}
        onChangeText={handleSearch}
      />
      <FlatList
        data={listaFiltrada} // Usamos los resultados de la búsqueda
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => <PlatoC plato={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default MenuPag;
