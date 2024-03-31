import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ user }) => {
  console.log('re-render header');
  return (
    <View style={styles.container}>
      <Image resizeMode="center" style={styles.avatar} source={{ uri: user.avatar }} />
      <View>
        <Text>Chào ngày mới</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default memo(Header);
