import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { API_URL } from './config';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function productsList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(API_URL + '/products')
            .then(response => {
                setProducts(response.data.list);
            })
            .catch(error => console.error('Erro ao carregar produtos:', erro,));
    }, []);
    return (
        <ScrollView contentContainerStyle={StyleSheet.container}>
            {products.map(item => (
                <View key={item.id}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.tile}</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "justify" }}>{item.description}</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }}>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}
