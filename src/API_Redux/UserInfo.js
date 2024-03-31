import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';

const UserInfo = (props) => {
    const { navigation } = props;
    // Sử dụng useSelector để truy cập thông tin người dùng từ Redux store
    const userInfo = useSelector(state => state.user.userInfo);
    const length = useSelector(state => state.cart.cartDataLength);
    console.log('datanè:', length);
    return (
        <View>
            <Text>User ID: { userInfo.userId }</Text>
            <Text>Email: { userInfo.email }</Text>
            <Text>Name: { userInfo.name }</Text>
            <Icon1 name="shoppingcart" size={ 40 } color="black" onPress={ () => navigation.navigate('Cart') } />
            {length > 0 && (
  <Text style={{ backgroundColor: 'red', color: 'white', borderRadius: 25, paddingHorizontal: 5, 
  marginLeft: -15, marginTop: -40, width: 50, height: 50, textAlign: 'center', lineHeight: 50,marginLeft:12 }}>{length}</Text>
)}

        </View>
    );
};

export default UserInfo;
