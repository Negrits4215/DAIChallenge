import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const InfoPlato = ({ plato }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: plato.image }} style={styles.image} />
                <Text style={styles.title}>{plato.title}</Text>
                <Text style={styles.summary}>{plato.summary}</Text> {/* Agrega el resumen debajo del título */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '80%'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: '70%',
        alignItems: 'center',
        height: '100%'
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    summary: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
});

export default InfoPlato;
