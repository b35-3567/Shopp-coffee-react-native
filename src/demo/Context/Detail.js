// Detail.js
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../Context/AppContext1';

const Detail = () => {
    const { cart } = useContext(AppContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cart:</Text>
            {cart.map((item, index) => (
                <View key={index}>
                    <Text>ID: {item.id}</Text>
                    <Text>Name: {item.name}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                </View>
            ))}
        </View>
    );
};

export default Detail;