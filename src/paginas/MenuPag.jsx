import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput, Button } from 'react-native';
import PlatoC from '../components/PlatoCard';
import Modal from '../components/Modal'
import mockData from '../mocks/data';

const MenuPag = ({ route }) => {
    let data = [];
    const [lista, setLista] = useState(data);
    const [busqueda, setBusqueda] = useState('');
    const [menuFiltrado, setMenuFiltrado] = useState([]);
    const [menu, setMenu] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const apiKey = 'af9d873988bc46b5a7cd70a59c79972e';
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                return response.json();
            })
            .then((responseData) => {
                console.log(responseData.results)
                data = responseData.results;
                setLista(responseData.results)
                console.log(data)
            })
            .catch((error) => {
                console.error('Error al cargar datos desde la API:', error);
            });
    }, []);

    const updateList = (menu) => {
        const newList = data.filter((platoData) => {
            // Verifica si el plato actual en data no está en el menú
            return !menu.some((platoMenu) => platoMenu.id === platoData.id);
        });
        console.log(newList)
        setLista(newList);
    };

    const handleSearch = (text) => {
        const filteredResults = menu.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setBusqueda(text);
        setMenuFiltrado(filteredResults);
    };

    const cerrarModal = () => {
        setModalVisible(false);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const handleDelete = (id) => {
        const updatedMenu = menu.filter((item) => item.id !== id);
        setMenu(updatedMenu);
        setMenuFiltrado(updatedMenu);
        updateList(updatedMenu); // Actualiza la lista después de eliminar un plato
    };

    const handleAdd = (plato) => {
        const newmenu = [...menu, plato]
        setMenu(newmenu);
        setMenuFiltrado([...menuFiltrado, plato]);
        updateList(newmenu); // Actualiza la lista después de eliminar un plato

        console.log(newmenu)
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar plato por título"
                value={busqueda}
                onChangeText={handleSearch}
            />
            <Button
                title="Agregar Plato al Menu"
                onPress={() => openModal()} // Mostrar el Modal al hacer clic en el botón
            />
            <FlatList
                data={menuFiltrado} // Usamos los resultados de la búsqueda
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                renderItem={({ item }) => <PlatoC plato={item} onDelete={handleDelete} />}
            />
            <Modal platos={lista} isVisible={modalVisible} onClose={cerrarModal} onAdd={handleAdd} noDis={menu} />
                
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
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default MenuPag;
