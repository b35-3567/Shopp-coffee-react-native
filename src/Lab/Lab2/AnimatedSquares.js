import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Dimensions } from 'react-native';

const SQUARE_SIZE = 100;
const COLORS = ['red', 'purple'];

export default function AnimatedSquares() {
  const [posX1] = useState(new Animated.Value(0));
  const [posX2] = useState(new Animated.Value(Dimensions.get('window').width - SQUARE_SIZE));
  const [posY1] = useState(new Animated.Value(0));
  const [posY2] = useState(new Animated.Value(0));
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const currentColor = COLORS[currentColorIndex];

  useEffect(() => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomDirection = () => Math.random() > 0.5 ? 1 : -1;

    const moveX1 = () => {
      const newX = getRandomInt(0, Dimensions.get('window').width - SQUARE_SIZE);
      Animated.spring(posX1, {
        toValue: newX,
        stiffness: 80,
        damping: 8,
        useNativeDriver: true, // Thêm dòng này
      }).start(moveX1);
    };

    const moveX2 = () => {
      const newX = getRandomInt(0, Dimensions.get('window').width - SQUARE_SIZE);
      Animated.spring(posX2, {
        toValue: newX,
        stiffness: 80,
        damping: 8,
        useNativeDriver: true, // Thêm dòng này
      }).start(moveX2);
    };

    const moveY1 = () => {
      const newY = getRandomInt(0, Dimensions.get('window').height - SQUARE_SIZE);
      Animated.spring(posY1, {
        toValue: newY,
        stiffness: 80,
        damping: 8,
        useNativeDriver: true, // Thêm dòng này
      }).start(moveY1);
    };

    const moveY2 = () => {
      const newY = getRandomInt(0, Dimensions.get('window').height - SQUARE_SIZE);
      Animated.spring(posY2, {
        toValue: newY,
        stiffness: 80,
        damping: 8,
        useNativeDriver: true, // Thêm dòng này
      }).start(moveY2);
    };

    moveX1();
    moveX2();
    moveY1();
    moveY2();

    return () => {
      posX1.removeAllListeners();
      posX2.removeAllListeners();
      posY1.removeAllListeners();
      posY2.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCollision = () => {
    Animated.sequence([
      Animated.timing(posX1, {
        toValue: posX1._value + 20, // Hoặc giá trị khác tùy thuộc vào hướng bạn muốn xoay
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true, // Thêm dòng này
      }),
      Animated.timing(posX1, {
        toValue: posX1._value - 20,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: true, // Thêm dòng này
      }),
      Animated.timing(posX1, {
        toValue: posX1._value,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true, // Thêm dòng này
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.square, { backgroundColor: currentColor, transform: [{ translateX: posX1 }, { translateY: posY1 }] }]}
        onLayout={({ nativeEvent }) => {
          const { layout } = nativeEvent;
          // Xử lý va chạm ở đây
          if (layout.x === posX2._value && layout.y === posY2._value) {
            handleCollision();
          }
        }}
      />
      <Animated.View style={[styles.square, { backgroundColor: currentColor, transform: [{ translateX: posX2 }, { translateY: posY2 }] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: 10,
    margin: 10,
    position: 'absolute',
  },
});
