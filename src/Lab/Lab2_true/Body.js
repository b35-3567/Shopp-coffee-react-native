import React, { useState, memo } from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';

const Body = ({ onUpdateInfor, onClickChangeBgFooter }) => {
  const [name, setName] = useState('');
  const [linkImage, setLinkImage] = useState('');

  const handleChangeInfo = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfor({ name, avatar: linkImage });
    } else {
      ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <Text>Body</Text>
      <TextInput
        placeholder="Nhập tên"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Nhập đường dẫn ảnh"
        value={linkImage}
        onChangeText={(text) => setLinkImage(text)}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
      />
      <Button title="Cập nhật thông tin" onPress={handleChangeInfo} />
      <Button title="Đổi màu Footer" onPress={onClickChangeBgFooter} />
    </View>
  );
};

export default memo(Body);
