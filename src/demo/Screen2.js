import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppTextInput from '../commons/AppTextInput2';
import customStyles from '../styles/customStyles';

const Screen2 = (props) => {
    const [name, setName] = useState('');

    const checkName = (value) => {
        setName(value);
    }
  return (
    <View>
      <View>
            <Text>Screen2</Text>
            <AppTextInput
                title="Enter your name:"
                err="Name is required"
                styles={customStyles}
                value={name}
                onChangeText={checkName}
            />
            
        </View>
    </View>
  )
}

export default Screen2