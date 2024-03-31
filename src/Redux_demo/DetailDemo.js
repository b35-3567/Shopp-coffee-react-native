// DetailDemo.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const DetailDemo = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <View>
      <Text>Detail</Text>
      {cartItems.map(item => (
        <View key={item._id}>
          <Text>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

export default DetailDemo;
