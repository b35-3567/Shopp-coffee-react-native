import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function Bai2_Lab2() {
  const translateY = useSharedValue(-500); // Khởi tạo giá trị ban đầu

  const handlePress = () => {
    translateY.value = withTiming(120, { duration: 1000 }); // Kích hoạt hiệu ứng từ -300 đến 0
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }], // Sử dụng giá trị translateY
    };
  });

  return (
    <View style={ styles.container }>
      <Animated.View style={ [styles.square, animatedStyle] } />
      <View style={ styles.buttonContainer }>
        <Button onPress={ handlePress } title="Click me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
  },
});
