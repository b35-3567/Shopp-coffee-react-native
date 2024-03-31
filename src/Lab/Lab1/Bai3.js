import React from 'react';
import { View } from 'react-native';
import CustomSectionView from './CustomSectionView';

const Bai3 = () => {
  const DATA = [
    {
      title: "Lịch trình",
      data: [
        {
          adress: "Hồ tràm, Vũng Tàu",
          time: "09-10AM 12/12/2024",
          transporttation: "Xe Bus",
          time2: "21:00",
          img: "https://png.pngtree.com/png-clipart/20230207/original/pngtree-wave-and-sea-isolated-summer-narure-png-image_8946947.png"
        }
      ]
    },
    {
      title: "Khách sạn",
      data: [
        {
          adress: "Hồ tràm, Vũng Tàu",
          time: "09-10AM 12/12/2024",
          transporttation: "Xe Bus",
          time2: "21:00",
        },
        // Thêm các mục khác ở đây
      ]
    },
    // Các mục khác...
  ];

  return (
    <View>
      <CustomSectionView sections={DATA} />
      {/* Các nội dung khác của màn hình */}
    </View>
  );
};

export default Bai3;
