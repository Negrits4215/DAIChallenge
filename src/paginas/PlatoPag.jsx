import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoPlato from '../components/InfoPlato';
import mockData from '../mocks/dataInfo';



const PlatoPag = ({ route }) => {
    const data = mockData.results;
    const [plato, setPlato] = useState({});

    const apiKey = 'af9d873988bc46b5a7cd70a59c79972e';
    const apiUrl = `https://api.spoonacular.com/recipes/${route.params.idPlato}/information?apiKey=${apiKey}&includeNutrition=true.`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                return response.json();
            })
            .then((responseData) => {
                const formattedData = {
                    image: responseData.image,
                    title: responseData.title,
                    summary: responseData.summary
                };
                setPlato(formattedData)
                console.log(data)
            })
            .catch((error) => {
                console.error('Error al cargar datos desde la API:', error);
            });
    }, []);

    return (
        <InfoPlato plato={plato}/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PlatoPag;
