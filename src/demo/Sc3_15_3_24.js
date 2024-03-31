import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const Sc3_15_3_24 = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        'https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png'
    ];

    const renderImages = () => {
        return images.map((item, index) => {
            return (
                <View key={index + 1}>
                    <Image
                        resizeMode='contain'
                        source={{ uri: item }}
                        style={{ width: '100%', height: 300 }}
                    />
                </View>
            );
        });
    };

    const renderDots = () => {
        return images.map((item, index) => {
            return (
                <View
                    key={index + 1}
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: selectedIndex === index ? 'blue' : 'gray',
                        margin: 5
                    }}
                />
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.previous, styles.icon]}>Previous</Text>
            <Text style={[styles.next, styles.icon]}>Next</Text>
            <PagerView style={styles.pagerView} initialPage={selectedIndex}>
                {renderImages()}
            </PagerView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {renderDots()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    next: {
        right: 10,
    },
    previous: {
        left: 10,
    },
    icon: {
        position: 'absolute',
        top: 150,
    },
    container: {
        width: '100%',
        height: '100%',
    },
    pagerView: {
        width: '100%',
        height: 300,
    },
});

export default Sc3_15_3_24;
