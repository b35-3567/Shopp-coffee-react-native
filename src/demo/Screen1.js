import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../commons/AppTextInput'
import styles from '../styles/AppStyles'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

const Screen1 = (props) => {
    const [name, setName] = useState('');

    const getContainerStyle = () => {
        return {
            ...styles.backgroundColorRed,
            height: 100,
        }
    }

    const getInputStye = () => {
        return {
            width: '100%',
            height: 50,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
        }
    }

    const checkName = (value) => {
        console.log('checkName: ', value)
        // bắt lỗi khi nhập tên
        setName(value)
    }

    return (
        <View>
            <Text>Screen1</Text>
            <AppTextInput
                title={null}
                err={null}
                styles={{ 
                    container: getContainerStyle(), 
                    input: getInputStye(), 
                    title: {}, 
                    err: {} 
                }}
                value={name}
                onChangeText={checkName}
                iconLeft={require('../resources/images/eye.png')}
            />
        </View>
    )
}

export default Screen1