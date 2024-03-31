import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

const ListItem = ({ id, name, description }) => {
  // Giả sử bạn muốn tính toán một phần của description một cách phức tạp,
  // nhưng chỉ khi một trong các thuộc tính name hoặc id thay đổi.
  const formattedDescription = useMemo(() => {
    console.log('Calculating formatted description...');
    // Code tính toán phức tạp ở đây...
    return description.toUpperCase(); // Ví dụ: Đơn giản hóa cho mục đích minh họa
  }, [name, id]);

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      <Text>{formattedDescription}</Text>
    </View>
  );
};

export default ListItem;
