import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
} from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';

export default function Bai1_Lab2() {
    const sideLength = useSharedValue(120); // Giá trị khởi tạo

    const handlePress = () => {
        sideLength.value = 100; // Cập nhật giá trị để phóng to
        sideLength.value = withTiming(300, { duration: 400 }, () => {
            // Sau khi phóng to xong, áp dụng hiệu ứng rung lắc
            sideLength.value = withRepeat(
                withTiming(120, { duration: 150, easing: Easing.linear }),
                5,
                true
            );
        });
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: sideLength.value,
            height: sideLength.value,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.square, animatedStyle]} />
            <View style={styles.buttonContainer}>
                <Button onPress={handlePress} title="Click me" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        backgroundColor: 'red',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
    },
});
