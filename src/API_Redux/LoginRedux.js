import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfo } from './userActions';
import axios from 'axios';
import { View, TextInput, Button } from 'react-native';
import {API} from '../asm/API_TRUE';
const LoginRedux = (props) => {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`http://${API}:3000/login`, {
                email: email,
                password: password
            });

            const userInfo = response.data;

            dispatch(saveUserInfo(userInfo));
            navigation.navigate('Info');
        } catch (error) {
            console.error('Đã xảy ra lỗi khi đăng nhập:', JSON.stringify(error)); // Bọc chuỗi lỗi trong JSON.stringify
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={ email }
                onChangeText={ (text) => setEmail(text) }
            />
            <TextInput
                placeholder="Password"
                value={ password }
                onChangeText={ (text) => setPassword(text) }
                secureTextEntry={ true }
            />
            <Button
                onPress={ handleLogin }
                title='Đăng nhập'
            />
        </View>
    );
};

export default LoginRedux;
