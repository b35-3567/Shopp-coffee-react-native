import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];

export default function Main() {
  const [user, setUser] = useState({
    name: 'Chưa có tên',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
  });
  const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');
  const [footerColor, setFooterColor] = useState(colors[0]);

  const handleUpdateInfor = useCallback((_user) => {
    setUser(_user);
  }, []);

  const handleRandomColor = useCallback(() => {
    const numberRan = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRan]);
  }, []);

  useEffect(() => {
    const currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();
    setLastTimeUpdate(datetime);
  }, [user]);

  return (
    <View style={styles.container}>
      <Header user={user} />
      <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor} />
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
