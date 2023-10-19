import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, FlatList, TextInput, TouchableOpacity } from 'react-native';
import ModalsCard from './ModalsCard';

const InfoPlato = ({ platos, setPlatos, isVisible, onClose, onAdd }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        const filteredResults = platos.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setSearchText(text);
        setPlatos(filteredResults);
    };

    const handleClose = () => {
        onClose()
        setSearchText('')
    };
    
    const handleAdd = (plato) => {
        const updatedPlatos = platos.filter((item) => item.id !== plato.id);

        onAdd(plato)
        setPlatos(updatedPlatos)
        onClose()
    };

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar..."
                            value={searchText}
                            onChangeText={handleSearch}
                        />
                        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={platos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ModalsCard plato={item} onAdd={handleAdd} />}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: '36%',
        height: '80%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
    },
    closeButton: {
        marginLeft: 10,
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 20,
    },
});

export default InfoPlato;
