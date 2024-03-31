import React, { useRef } from 'react';
import { View, Text, FlatList, Animated, StyleSheet } from 'react-native';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown'];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList); // Wrap FlatList with Animated component

const Header = ({ scrollY }) => {
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [200, 100],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity, transform: [{ scale: headerScale }] }]}>
      <Text style={styles.title}>Popular Quizes</Text>
    </Animated.View>
  );
};

const Bai1_Lab3 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Header scrollY={scrollY} />
      <AnimatedFlatList // Use AnimatedFlatList instead of FlatList
        data={colors}
        renderItem={({ item }) => <View style={[styles.item, { backgroundColor: item }]} />}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={<View style={styles.placeholder} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 200, // header height
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    height: 100,
    marginVertical: 10,
  },
  placeholder: {
    height: 200, // header height
  },
});

export default Bai1_Lab3;
