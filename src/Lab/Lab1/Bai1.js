import React from 'react';
import { View } from 'react-native';
import CustomHeader from './CustomHeader';  // Định nghĩa đường dẫn đến tệp Header.js

const Bai1 = () => {
  return (
    <View>
      <CustomHeader
        leftIcon={ { name: 'home', onPress: () => console.log('Left icon pressed') } }
        centerText="Center Title"
        rightIcon={ { name: 'search', onPress: () => console.log('Right icon pressed') } }
      />
      <CustomHeader
        centerText="Center Title"
        rightIcon={ { name: 'search', onPress: () => console.log('Right icon pressed') } }
      />
      <CustomHeader
        centerText="Center Title"

      />
      {/* Các nội dung khác của màn hình */ }
    </View>
  );
}

export default Bai1;
