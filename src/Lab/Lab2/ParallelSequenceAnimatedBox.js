import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolateColor } from 'react-native-reanimated';
import { WIDTH, HEIGHT, STATUS_BAR_HEIGHT, BOTTOM_SPACE, randomColor } from '../Lab2/utils/index';

const BOX_SIZE = 50;

const ParallelSequenceAnimatedBox = () => {
  const values = {
    duration: 1000,
    initialX: 0,
    finalX: WIDTH - BOX_SIZE,
    initialY: HEIGHT / 2 - STATUS_BAR_HEIGHT,
    finalY: HEIGHT - BOX_SIZE - STATUS_BAR_HEIGHT - BOTTOM_SPACE,
  };

  const animatedRotation = useSharedValue(0);
  const step1 = useSharedValue(values.initialX);
  const step2 = useSharedValue(values.initialY);
  const step3 = useSharedValue(0);
  const step4 = useSharedValue(0);

  const [animatedColors, setAnimatedColors] = useState({
    initialColor: randomColor(),
    finalColor: randomColor(),
  });

  const colorAnimationCallback = () => {
    setAnimatedColors(prevColors => ({
      initialColor: prevColors.finalColor,
      finalColor: randomColor(),
    }));
  };

  useEffect(() => {
    const interval = setInterval(colorAnimationCallback, values.duration * 4);
    return () => clearInterval(interval);
  }, []);

  const animateRotationTranslationX = () => {
    animatedRotation.value = withTiming(360, { duration: values.duration });
    step1.value = withTiming(values.finalX, { duration: values.duration });
  };

  const animateTranslationY = () => {
    step2.value = withTiming(values.finalY, { duration: values.duration });
  };

  const animateTranslationXBack = () => {
    step3.value = withTiming(values.finalX - values.initialX, { duration: values.duration });
    animatedRotation.value = withTiming(0, { duration: values.duration });
  };

  const animateTranslationYBack = () => {
    step4.value = withTiming(values.finalY - values.initialY, { duration: values.duration });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateRotationTranslationX();
      animateTranslationY();
      animateTranslationXBack();
      animateTranslationYBack();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: step1.value - step3.value,
      top: step2.value - step4.value,
      backgroundColor: interpolateColor(animatedRotation.value, {
        inputRange: [0, 360],
        outputRange: [animatedColors.initialColor, animatedColors.finalColor],
      }),
      transform: [{ rotate: `${animatedRotation.value}deg` }],
    };
  });

  return <Animated.View style={[styles.box, animatedStyle]} />;
};

const styles = StyleSheet.create({
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    position: 'absolute',
  },
});

export default ParallelSequenceAnimatedBox;
