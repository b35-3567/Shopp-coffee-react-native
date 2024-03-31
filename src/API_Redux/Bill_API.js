import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { API } from '../asm/API_TRUE';

const Bill_API = ({ navigation, route }) => {
    const { totalPrice } = route.params;
    const userInfo = useSelector(state => state.user.userInfo);
    const [cartItems, setCartItems] = useState([]);
console.log('userInfo id:',userInfo.userId);
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`http://${API}:3000/cart/${userInfo.userId}`);
                const data = await response.json();
                console.log('chiều dài data:', data);
                setCartItems(data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [userInfo]);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text>Product ID: {item.productId}</Text>
            <Text>Quantity: {item.quantity}</Text>
        </View>
    );
    const Pm = 'ATM';
    const PV = 'Giao hàng nhanh';
   
    const handleCheckout = async () => {
        try {
            const productData = cartItems.map(item => ({
                product: item.productId,
                quantity: item.quantity,
            }));
    
            const checkoutData = {
                userId: userInfo.userId,
                total: totalPrice,
                status: 'pending',
                paymentMethod: Pm,
                shippingMethod: PV,
                products: productData,
            };
    
            const response = await fetch(`http://${API}:3000/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(checkoutData)
            });
    
            if (response.ok) {
                Alert.alert('Thanh toán thành công');
            } else {
                const errorData = await response.json();
                console.error('Lỗi khi thực hiện thanh toán:', errorData.error);
            }
        } catch (error) {
            console.error('Lỗi khi thực hiện thanh toán:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Bill_API</Text>
            <Text>userId: {userInfo.userId}</Text>
            <Text>Tổng tiền: {totalPrice} VNĐ</Text>
            <Text>{Pm}</Text>
            <Text>{PV}</Text>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
            <Pressable onPress={handleCheckout} style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Thanh Toán</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    checkoutButton: {
        backgroundColor: 'pink',
        width: 329,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    checkoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Bill_API;
