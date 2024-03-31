import React from 'react';
import { FlatList, View, Text } from 'react-native';

const MyComponent = () => {
    const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        // Thêm các mục khác tại đây
      ];
      

  // Render một mục trong danh sách
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  // Render các thành phần ở đầu danh sách
  const renderHeader = () => (
    <View>
      <Text style={{ fontSize: 24 }}>Header Component</Text>
    </View>
  );

  // Render các thành phần ở cuối danh sách
  const renderFooter = () => (
    <View>
      <Text style={{ fontSize: 24 }}>Footer Component</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
    />
  );
};

export default MyComponent;
