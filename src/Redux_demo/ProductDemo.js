// ProductDemo.js
import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productsActions';
import { addToCart } from './actions/cartActions';

const ProductDemo = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.8:3000/products');
        const data = await response.json();
        dispatch(fetchProducts(data));
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    Alert.alert('đã thêm thành công')
  };

  return (
    <View>
      <Text>Product List</Text>
      {products.map(product => (
        <View key={product._id}>
          <Text>{product.name}</Text>
          <Text>Price: {product.price}</Text>
          <Button onPress={() => handleAddToCart(product)} title="Add to Cart" />
        </View>
      ))}
    </View>
  );
};

export default ProductDemo;
