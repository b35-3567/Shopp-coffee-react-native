import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './actions/cartActions';
// Import action creators
import { increaseQuantity, decreaseQuantity } from './actions/cartActions';
// Trong hàm CartDemo
const CartDemo = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleRemoveFromCart = product => {
    dispatch(removeFromCart(product));
  };

  const handleIncreaseQuantity = product => {
    dispatch(increaseQuantity(product._id));
  };

  const handleDecreaseQuantity = product => {
    dispatch(decreaseQuantity(product._id));
  };

  return (
    <View>
      <Text>Cart</Text>
      {cartItems.map(item => (
        <View key={item._id}>
          <Text>{item.name}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Button onPress={() => handleRemoveFromCart(item)} title="Remove" />
          <Button onPress={() => handleIncreaseQuantity(item)} title="+" />
          <Button onPress={() => handleDecreaseQuantity(item)} title="-" />
        </View>
      ))}
    </View>
  );
};

export default CartDemo;
