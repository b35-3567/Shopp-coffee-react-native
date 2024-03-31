import React from 'react';
import { Animated } from 'react-native';
import { WIDTH, HEIGHT, STATUS_BAR_HEIGHT, BOTTOM_SPACE } from '../Lab2/utils/index';
import styles, { BOX_SIZE } from './styles';

const SequenceAnimatedBox = () => {
  const values = {
    duration: 1000,
    initialX: 0,
    finalX: WIDTH - BOX_SIZE,
    initialY: HEIGHT / 2 - STATUS_BAR_HEIGHT,
    finalY: HEIGHT - BOX_SIZE - STATUS_BAR_HEIGHT - BOTTOM_SPACE,
  };

  const animatedX = new Animated.Value(values.initialX);
  const animatedY = new Animated.Value(values.initialY);

  const step1 = Animated.timing(animatedX, {
    toValue: values.finalX,
    duration: values.duration,
    useNativeDriver: true,
  });

  const step2 = Animated.timing(animatedY, {
    toValue: values.finalY,
    duration: values.duration,
    useNativeDriver: true,
  });

  const step3 = Animated.timing(animatedX, {
    toValue: values.finalX - values.initialX,
    duration: values.duration,
    useNativeDriver: true,
  });

  const step4 = Animated.timing(animatedY, {
    toValue: values.finalY - values.initialY,
    duration: values.duration,
    useNativeDriver: true,
  });

  const sequenceAnimations = Animated.sequence([step1, step2, step3, step4]);

  Animated.loop(sequenceAnimations).start();

  return (
    <Animated.View
      style={[
        styles.box,
        {
          left: animatedX,
          top: animatedY,
        },
      ]}
    />
  );
};

export default SequenceAnimatedBox;
