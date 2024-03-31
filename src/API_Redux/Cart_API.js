/*
// Cart_API.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
const Cart_API = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
 // Sử dụng useSelector để truy cập thông tin người dùng từ Redux store
 const userInfo = useSelector(state => state.user.userInfo);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        console.log('userInfo._id:',userInfo.userId);
        const response = await fetch(`http://192.168.1.20:3000/cart/${userInfo.userId}`);
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userInfo]);


  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const promises = cartItems.map(async (item) => {
          const response = await fetch(`http://192.168.1.20:3000/products/${item.productId}`);
          return response.json();
        });
        const productsData = await Promise.all(promises);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductInfo();
  }, [cartItems]);
 
  const renderItem = ({ item, index }) => {
    // Kiểm tra xem sản phẩm có tồn tại trong mảng products không
    if (products[index]) {
      const totalPrice = products[index].price * item.quantity;
      return (
        <View style={styles.itemContainer}>
            <Text>userId:{userInfo.userId}</Text>
          <Text>{products[index].name}</Text>
          <Text>{item._id}</Text>
          <Text>Giá gôốc:{products[index].price}</Text>
          <Text>Tổng tiền:{totalPrice}VNĐ</Text>
          {products[index].images && products[index].images.length > 0 ? (
            <Image style={styles.image} source={{ uri: products[index].images[0] }} />
          ) : (
            <Text>No image available</Text>
          )}
          <View style={styles.quantityContainer}>
            <Pressable onPress={() => decreaseQuantity(item)}>
              <Text style={styles.quantityButton}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Pressable onPress={() => increaseQuantity(item)}>
              <Text style={styles.quantityButton}>+</Text>
            </Pressable>
          </View>
        </View>
      );
    } else {
      // Nếu sản phẩm không tồn tại, hiển thị một phần tử trống
      return <View />;
    }
  };
  

  return (
    <SafeAreaView>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 6,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#FF3366',
    borderRadius: 5,
    width: 120,
  },
  quantityButton: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 10,
  },
});

export default Cart_API;
*/
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCartDataLength } from './actions';
import {API} from '../asm/API_TRUE';
const Cart_API = (props) => {
  const {navigation}=props;
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const userInfo = useSelector(state => state.user.userInfo);
  const [totalPrice, setTotalPrice] = useState(0); // Tổng tiền của giỏ hàng
  //mơi thêm
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://${API}:3000/cart/${userInfo.userId}`);
        const data = await response.json();
        console.log('chiều dài data:', data.length);
        // Sử dụng action creator setCartDataLength để tạo action object với giá trị dataLength
        const action = setCartDataLength(data.length);
        dispatch(action);
        // Log giá trị dataLength để kiểm chứng
        console.log('dataLength:', action.payload);

        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userInfo, dispatch]);


  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const promises = cartItems.map(async (item) => {
          const response = await fetch(`http://${API}:3000/products/${item.productId}`);
          return response.json();
        });
        const productsData = await Promise.all(promises);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductInfo();
  }, [cartItems]);



 // Tính tổng tiền của giỏ hàng
 useEffect(() => {
  let total = 0;
  cartItems.forEach((item, index) => {
    if (products[index]) {
      total += products[index].price * item.quantity;
    }
  });
  setTotalPrice(total);
}, [cartItems, products]);


  const increaseQuantity = async (item) => {
    try {
      const response = await fetch(`http://${API}:3000/increase_quantity/${item._id}`, {
        method: 'PUT'
      });
      if (response.ok) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        const updatedCartItems = cartItems.map(cartItem => cartItem._id === item._id ? updatedItem : cartItem);
        setCartItems(updatedCartItems);
      } else {
        console.error('Failed to increase quantity:', response.statusText);
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const decreaseQuantity = async (item) => {
    if (item.quantity === 1) {
      // Quantity cannot be decreased further
      return;
    }
    try {
      const response = await fetch(`http://${API}:3000/decrease_quantity/${item._id}`, {
        method: 'PUT'
      });
      if (response.ok) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        const updatedCartItems = cartItems.map(cartItem => cartItem._id === item._id ? updatedItem : cartItem);
        setCartItems(updatedCartItems);
      } else {
        console.error('Failed to decrease quantity:', response.statusText);
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const renderItem = ({ item, index }) => {
    if (products[index]) {
      const totalPrice = products[index].price * item.quantity;
      return (
        <View style={ styles.itemContainer }>
          <Text>userId: { userInfo.userId }</Text>
          <Text>{ products[index].name }</Text>
          <Text>{ item._id }</Text>
          <Text>Giá gốc: { products[index].price }</Text>
          <Text>Tổng tiền: { totalPrice } VNĐ</Text>
          { products[index].images && products[index].images.length > 0 ? (
            <Image style={ styles.image } source={ { uri: products[index].images[0] } } />
          ) : (
            <Text>No image available</Text>
          ) }
          <View style={ styles.quantityContainer }>
            <Pressable onPress={ () => decreaseQuantity(item) }>
              <Text style={ styles.quantityButton }>-</Text>
            </Pressable>
            <Text style={ styles.quantity }>{ item.quantity }</Text>
            <Pressable onPress={ () => increaseQuantity(item) }>
              <Text style={ styles.quantityButton }>+</Text>
            </Pressable>
          </View>
        </View>
      );
    } else {
      return <View />;
    }
  };

  return (
    <SafeAreaView>
      <Text style={ styles.title }>Cart</Text>
      <FlatList
        data={ cartItems }
        renderItem={ renderItem }
        keyExtractor={ (item) => item._id.toString() }
      />
      <Text style={{fontSize:34}}> Tổng tiền: {totalPrice} VNĐ</Text>
     <Text style={{backgroundColor:'pink',width:'90%'}} onPress={()=>navigation.navigate('Bill',{ totalPrice: totalPrice })}>Thanh tonas</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 6,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#FF3366',
    borderRadius: 5,
    width: 120,
  },
  quantityButton: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 10,
  },
});

export default Cart_API;
