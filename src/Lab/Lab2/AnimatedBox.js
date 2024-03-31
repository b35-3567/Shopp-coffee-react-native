import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

const AnimatedBox = () => {
  const animatedX = useAnimatedStyle(() => {
    return {
      left: withTiming(200),
    };
  });

  const animatedY = useAnimatedStyle(() => {
    return {
      top: withTiming(200),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedX, animatedY]} />
    </View>
  );
};

export default AnimatedBox;
