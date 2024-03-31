import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

const HomeSc = ({ navigation }) => {
    const dispatch = useDispatch();
    // const cartItems = useSelector(state => state.cart.items);
    const cartItems = [
        {},
        {},
         
    ]
    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { id: 1, name: 'Product 1', price: 10 } });
    };

    return (
        <View>
            <Text>Home Screen</Text>
            <View style={ { flexDirection: 'row', alignItems: 'center' } }>
                <Icon1 name="shoppingcart" size={ 40 } color="black" />
                { cartItems.length > 0 && <Text style={ { backgroundColor: 'red', color: 'white', borderRadius: 10, paddingHorizontal: 5, marginLeft: -15, marginTop: -30 } }>{ cartItems.length }</Text> }
            </View>
            <Button title="Go to Cart" onPress={ () => navigation.navigate('Cart') } />
        </View>
    );
};

export default HomeSc;
