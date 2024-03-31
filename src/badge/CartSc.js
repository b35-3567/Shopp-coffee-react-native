import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartLength } from './actions/cartActions';
const CartSc = () => {
  //const cartItem = useSelector(state => state.cart.items);

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  //const userInfo = 65fc06ec3e134f6a12ace83c;



  const dispatch = useDispatch();
  const cartLength = useSelector(state => state.cart.cartLength);

  // Cập nhật số lượng sản phẩm trong giỏ hàng sau khi fetch danh sách sản phẩm
  useEffect(() => {
    dispatch(updateCartLength(cartItems.length));
  }, [cartItems.length, dispatch]);



  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://192.168.1.20:3000/cart/65fc06ec3e134f6a12ace83c`);
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

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
    if (products[index]) {
      const totalPrice = products[index].price * item.quantity;
      return (
        <View style={styles.itemContainer}>
          <Text>{products[index].name}</Text>
          <Text>{item._id}</Text>
          <Text>Giá gốc: {products[index].price}</Text>
          <Text>Tổng tiền: {totalPrice} VNĐ</Text>
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

export default CartSc;
