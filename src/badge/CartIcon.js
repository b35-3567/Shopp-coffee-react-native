import React from 'react';
import { TouchableOpacity, View, Text,StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/AntDesign';

const CartIcon = ({ onPress, quantity }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="shoppingcart" size={30} color="black" />
      {quantity > 0 && (
        <View style={styles.badge}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    color: 'white',
    fontSize: 12,
  },
});

export default CartIcon;
