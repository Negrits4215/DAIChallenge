import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoPlato from '../components/InfoPlato';
import mockData from '../mocks/dataInfo';



const PlatoPag = ({ route }) => {
    const data = mockData.results;
    const [plato, setPlato] = useState({});

    useEffect(() => {
        const platoId = route.params.idPlato;

        const filteredResults = data.filter((item) =>
            item.id == platoId
        );
        console.log(filteredResults[0])
        console.log(platoId)
        setPlato(filteredResults[0])
    }, [route.params.idPlato]);

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
