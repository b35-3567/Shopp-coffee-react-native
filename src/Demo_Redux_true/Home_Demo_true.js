/*
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
  } from "react-native";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "./CartReducer";
  
  const Home_Demo_true = () => {
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    const dispatch = useDispatch();
    const images = [
      {
        id: "0",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg",
        name: "icecream",
      },
      {
        id: "1",
        image:
          "https://blog.webico.vn/wp-content/uploads/2019/12/20110101jpg-1.jpg",
        name: "biscuit",
      },
      {
        id: "2",
        image:
          "https://blog.webico.vn/wp-content/uploads/2019/12/20110101jpg-1.jpg",
        name: "chocolate",
      },
    ];
    const addItemToCart = (item) => {
      dispatch(addToCart(item));
    };
    const removeItemFromCart = (item) => {
      dispatch(removeFromCart(item));
    };
    const increaseQuantity = (item) => {
      dispatch(incrementQuantity(item));
    }
    const decreaseQuantity = (item) => {
      if(item.quantity == 1){
        dispatch(removeFromCart(item));
      }else{
        dispatch(decrementQuantity(item));
      }
    }
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          Redux cart system
        </Text>
        {images.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ margin: 10 }}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 8 }}
                source={{ uri: item.image }}
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              {cart.some((value) => value.id == item.id) ? (
                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                    }}
                  >
                    REMOVE FROM CART
                  </Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => addItemToCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                    }}
                  >
                    ADD TO CART
                  </Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        ))}
  
        {cart.map((item,index) => (
          <View style={{padding:10}} key={index}>
            <Text>{item.name}</Text>
            <Image style={{ width: 100, height: 100, borderRadius: 8,marginTop:6 }}
                source={{ uri: item.image }}/>
            <Pressable
              style={{
                flexDirection: "row",
                marginTop:20,
                alignItems: "center",
                backgroundColor: "#FF3366",
                borderRadius: 5,
                width: 120,
              }}
            >
              <Pressable onPress={() => decreaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  -
                </Text>
              </Pressable>
  
              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {item.quantity}
                </Text>
              </Pressable>
  
              <Pressable onPress={() => increaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </SafeAreaView>
    );
  };
  
  export default Home_Demo_true;
  
  const styles = StyleSheet.create({});
  */
 /*
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartReducer';

const Home_Demo_true = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.8:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        console.log('dâta:', data)
      }
      )

      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <SafeAreaView>
      <Text style={ { textAlign: 'center', fontSize: 16 } }>Redux cart system</Text>
      { products.map((item) => (
        <Pressable key={ item._id } style={ { flexDirection: 'row', alignItems: 'center' } }>
          <View style={ { margin: 10 } }>
            <Image style={ { width: 100, height: 100, borderRadius: 8 } } source={ { uri: item.images[0] } } />
          </View>
          <View>
            <Text style={ { fontWeight: 'bold' } }>{ item._id }</Text>
            <Text style={ { fontWeight: 'bold' } }>{ item.name }</Text>
            <Pressable onPress={ () => addItemToCart(item) }>
              <Text
                style={ {
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                } }
              >
                ADD TO CART
              </Text>
            </Pressable>
          </View>
        </Pressable>
      )) }
    </SafeAreaView>
  );
};

export default Home_Demo_true;

const styles = StyleSheet.create({});
*/
// Home_Demo_true.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartReducer';
import {API} from'../asm/API_TRUE'
const Home_Demo_true = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://${API}:3000/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    Alert.alert('Thêm vào giỏ hàng thành công');
  };

  return (
    <SafeAreaView>
      <Text style={{ textAlign: 'center', fontSize: 16 }}>Redux cart system</Text>
      {products.map((item) => (
        <Pressable key={item._id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ margin: 10 }}>
            <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: item.images[0] }} />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontWeight: 'bold' }}>{item._id}</Text>
            <Pressable onPress={() => addItemToCart(item)}>
              <Text
                style={{
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                }}
              >
                ADD TO CART
              </Text>
            </Pressable>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default Home_Demo_true;

const styles = StyleSheet.create({});

