import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

const Bai5_Lab2 = () => {
    const sideLength = useSharedValue(150);

    const handlePress = () => {
        sideLength.value = 250;
        setTimeout(() => {
          
            sideLength.value = withTiming(550, { duration: 400 });
        }, 1000); // Chờ 1 giây trước khi thực hiện
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: sideLength.value,
            height: sideLength.value,
        };
    });
    return (
        <View style={ styles.container }>
            <Animated.View style={ [styles.square, animatedStyle] } />
            <View style={ styles.buttonContainer }>
                <Button onPress={ handlePress } title="Click me" />
            </View>
        </View>
    )
}

export default Bai5_Lab2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    buttonContainer: {
        position: 'absolute',
        top: 560,
    },
});
