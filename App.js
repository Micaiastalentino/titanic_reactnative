import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ChamadaAPI from './api/ChamadaAPI'; // Ajuste o caminho de importação conforme sua estrutura de diretórios

const App = () => {
    return (
        <View style={styles.container}>
            <ChamadaAPI />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90EE90',
    },
});


export default App;