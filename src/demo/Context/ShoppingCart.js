
// ShoppingCart.js
import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../Context/AppContext1';

const ShoppingCart = () => {
    const navigation = useNavigation();
    const { addToCart } = useContext(AppContext);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddToCart = () => {
        addToCart({ id, name, quantity });
    };

    const navigateToDetail = () => {
        navigation.navigate('Detail');
    };

    return (
        <View>
            <TextInput
                placeholder="ID"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Quantity"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
            />
            <Button title="Add to cart" onPress={handleAddToCart} />
            <Button title="Go to Detail" onPress={navigateToDetail} />
        </View>
    );
};

export default ShoppingCart;