import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const CustomSectionView = ({ sections }) => {
    return (
        <ScrollView horizontal>
            { sections.map((section, index) => (
                <View key={ index }>
                    <Text style={ styles.title }>{ section.title }</Text>
                    <View style={ styles.section }>
                        { section.data.map((item, itemIndex) => (
                            <View key={ itemIndex } style={ styles.itemContainer }>
                                <Text>Địa chỉ: { item.adress }</Text>
                                <Text>Thời gian: { item.time }</Text>
                                <Text>Phương tiện vận chuyển: { item.transporttation }</Text>
                                <Text>Thời gian 2: { item.time2 }</Text>
                                { item.img && <Image source={ { uri: item.img } } style={ styles.image } /> }
                            </View>
                        )) }
                    </View>
                </View>
            )) }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.9)',
        elevation: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    title: {
        fontWeight: 'bold',
        //marginBottom: 5,
        marginLeft:10,
        fontSize:27,
        marginTop:20
     
    },
    itemContainer: {
        marginVertical: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
});

export default CustomSectionView;
