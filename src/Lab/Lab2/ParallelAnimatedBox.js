import React, { useCallback, useState } from 'react';
import { Animated } from 'react-native';
import { randomColor, WIDTH, HEIGHT, STATUS_BAR_HEIGHT } from '../Lab2/utils/index';
import styles, { BOX_SIZE } from './styles';

const ParallelAnimatedBox = () => {
  const firstValues = {
    duration: 2000,
    initialX: 0,
    finalX: WIDTH - BOX_SIZE,
    initialY: 0,
    finalY: HEIGHT / 2 - BOX_SIZE - STATUS_BAR_HEIGHT,
  };

  const [animatedColors, setAnimatedColors] = useState({
    initialColor: randomColor(),
    finalColor: randomColor(),
  });

  const [animatedX] = useState(new Animated.Value(firstValues.initialX));
  const [animatedY] = useState(new Animated.Value(firstValues.initialY));
  const [animatedRotation] = useState(new Animated.Value(0));

  const colorAnimationCallback = useCallback(() => {
    setAnimatedColors({
      initialColor: animatedColors.finalColor,
      finalColor: randomColor(),
    });
  }, [animatedColors.finalColor]);

  const colorAnimation = Animated.timing(animatedRotation, {
    toValue: 360,
    duration: firstValues.duration,
    useNativeDriver: true,
  });

  const parallelAnimations = Animated.parallel([
    Animated.timing(animatedX, {
      toValue: firstValues.finalX,
      duration: firstValues.duration,
      useNativeDriver: true,
    }),
    Animated.timing(animatedY, {
      toValue: firstValues.finalY,
      duration: firstValues.duration,
      useNativeDriver: true,
    }),
    colorAnimation,
  ]);

  Animated.loop(parallelAnimations).start();

  return (
    <Animated.View
      style={[
        styles.box,
        {
          left: animatedX,
          top: animatedY,
          backgroundColor: animatedColors.initialColor, // Initially use initial color
          transform: [{ rotate: animatedRotation.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg'],
          })}],
        },
      ]}
    />
  );
};

export default ParallelAnimatedBox;
