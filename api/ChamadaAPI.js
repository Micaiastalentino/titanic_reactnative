//ChamadaAPI.js

//Teste GitHub

import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

class ChamadaAPI extends Component {
    // Define os dados que deseja enviar
    state = {
        Sex_binario: 0,
        Age: 60,
    };

    // Envia a solicitação POST para a API Flask
    chamarAPI = async () => {
        try {
            const data = JSON.stringify(this.state); // Transforma os dados para JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const res = await axios.post('http://192.168.1.101:5000/predict', data, config);
            console.log(res.data);

        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };
    
    /*
    useEffect(() => {
        chamarAPI(); // Chamada da API ao montar o componente
    }, []);
    */
    
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.chamarAPI} style={styles.buttonContainer}>
                    <Text style={styles.text}>DIAGNOSTICAR</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 58,
        padding: 3,
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#ffd33d", 
        borderRadius: 18,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white'
    },
});

export default ChamadaAPI;