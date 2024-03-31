import React from 'react';
import { View, Text, SectionList, StyleSheet, Image } from 'react-native';


const DATA = [
    {
        title: "Lịch Trình",
        data: [
            {
                adress: "Hồ Cốc, Vũng Tàu",
                time: "05-10AM 12/12/2024 ",
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
                time: "09-10AM 12/12/2024 ",
                transporttation: "Xe Bus",
                time2: "21:00",
            },
            // Thêm các mục khác ở đây
        ]
    },
    // Các mục khác...
];



const Item = ({ data }) => (
    <View style={ styles.item }>
        <View style={ styles.itemContainer }>
            <Text>Địa điểm: { data.adress }</Text>
            <Text>Thời gian: { data.time }</Text>
            <Text>Phương tiện vận chuyển: { data.transporttation }</Text>
            <Text>Thời gian 2: { data.time2 }</Text>
            { data.img && <Image source={ { uri: data.img } } style={ styles.image } /> }
        </View>
    </View>
);



const SectionHeader = ({ title }) => (
    <View style={ styles.sectionHeader }>
        <Text style={ styles.sectionHeaderText }>{ title }</Text>
    </View>
);


const Bai2 = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.sectionListContainer }>
                <SectionList
                    horizontal
                    sections={ DATA }
                    keyExtractor={ (item, index) => item.title }
                    renderItem={ ({ item }) => <Item data={ item } /> } cvvc
                    renderSectionHeader={ ({ section: { title } }) => (
                        <SectionHeader title={ title } />
                    ) }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // Các styles khác
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
    itemContainer: {
        marginVertical: 8,
    },
    container: {
        flex: 1,
        marginTop: 22,
        paddingHorizontal: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    title: {
        fontSize: 16,
    },
    sectionHeader: {
        backgroundColor: '#ccc',
        height: 40,
        padding: 10,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Bai2
