import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native'; // Ensure ScrollView is imported
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const getInterpolation = (
  value,
  startOut,
  endOut,
  startIn = 0,
  endIn = 100,
) => {
  'worklet';
  return interpolate(value, [startIn, endIn], [startOut, endOut], {
    extrapolateLeft: Extrapolate.CLAMP,
    extrapolateRight: Extrapolate.CLAMP,
  });
};
export const Bai3_Lab3 = ({ onScroll }) => {
    const translationY = useSharedValue(0);
  
    const scrollHandler = useAnimatedScrollHandler(event => {
      translationY.value = event.contentOffset.y;
    });

  const styleAvatar = useAnimatedStyle(() => {
    const translate = getInterpolation(translationY.value, 1, 0.4);
    const translateY = getInterpolation(translationY.value, 0, 50);
    const translateX = getInterpolation(translationY.value, 0, -35);

    return {
      transform: [
        { translateX: translateX },
        { translateY: translateY },
        { scale: translate },
      ],
    };
  });

  const headerStyle = useAnimatedStyle(() => {
    const height = getInterpolation(translationY.value, 200, 60);
    const padding = getInterpolation(translationY.value, 24, 16);
    return {
      height,
      padding,
    };
  });

  const nameStyle = useAnimatedStyle(() => {
    const translateX = getInterpolation(translationY.value, 0, 50);
    const fontSize = getInterpolation(translationY.value, 22, 14);
    const marginTop = getInterpolation(translationY.value, 12, -4);

    return {
      transform: [{ translateX }],
      fontSize,
      marginTop,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scroll}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <View style={styles.content} />
      </Animated.ScrollView>
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.View style={[styles.avatar, styleAvatar]}>
          <Image
            source={{
              uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
            }}
            style={styles.avatar}
          />
        </Animated.View>
        <Animated.Text style={[styles.name, nameStyle]}>
          Nguyen Van A
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container fills the screen
  },
  scroll: {
    flex: 1,
  },
  content: {
    height: 1000, // Adjust content height as needed
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 1000,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    marginTop: 12,
  },
});

export default Bai3_Lab3;
