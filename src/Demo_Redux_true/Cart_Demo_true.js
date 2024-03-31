
// Cart_Demo_true.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity } from './CartReducer';
import { updateCartLength } from './CartActions';
//import { decreaseQuantityAsync, increaseQuantityAsync} from './CartReducer';
const Cart_Demo_true = () => {
  const cart = useSelector((state) => state.cart.cart);
console.log('cart:',cart);
console.log('cartlenght',cart.length);

const cartLength = useSelector((state) => state.cart.cartLength);
useEffect(() => {
  dispatch(updateCartLength(cart.length));
}, [cart.length, dispatch]);
console.log('cartLength',cartLength);

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };



  useEffect(() => {
    const fetchData = async () => {
      // console.log(cart);
      try {
        // Tạo một mảng các promise từ các yêu cầu API
        const promises = cart.map(async (item) => {
          const response = await fetch(`http://192.168.1.24:3000/cart/${item._id}`); // Sử dụng fetch thay vì Axios
          // console.log(response);
          const data = await response.json();
          console.log('response.product',response)
          return { item: response.product, number: item.number };
        });
        // Chờ tất cả các promise hoàn thành
        const productsData = await Promise.all(promises);
        // Cập nhật state với dữ liệu từ API
        setProducts(productsData);
        console.log('product',products);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, [cart]);



  const renderItem = ({ item }) => (
    <View style={ { padding: 10 } }>
      <Text>{ item.name }</Text>
      <Text>{ item._id }</Text>
      { item.images && item.images.length > 0 ? (
        <Image
          style={ { width: 100, height: 100, borderRadius: 8, marginTop: 6 } }
          source={ { uri: item.images[0] } }
        />
      ) : (
        <Text>No image available</Text>
      ) }
      <Pressable
        style={ {
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          backgroundColor: '#FF3366',
          borderRadius: 5,
          width: 120,
        } }
      >
        <Pressable onPress={ () => decreaseQuantity(item) }>
          <Text style={ { fontSize: 25, color: 'white', paddingHorizontal: 10 } }>-</Text>
        </Pressable>

        <Pressable>
          <Text style={ { fontSize: 20, color: 'white', paddingHorizontal: 10 } }>{ item.quantity }</Text>
        </Pressable>

        <Pressable onPress={ () => increaseQuantity(item) }>
          <Text style={ { fontSize: 20, color: 'white', paddingHorizontal: 10 } }>+</Text>
        </Pressable>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView>
      <Text style={ { textAlign: 'center', fontSize: 16 } }>Cart</Text>
      <FlatList
        data={ cart }
        renderItem={ renderItem }
        keyExtractor={ (item) => item._id.toString() }
      />
    </SafeAreaView>
  );
};

export default Cart_Demo_true;

const styles = StyleSheet.create({});


