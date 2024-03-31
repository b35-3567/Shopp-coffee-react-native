import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence
} from 'react-native-reanimated';

const Sc3 = () => {
    const offset = useSharedValue(0);
    const marginAnimation = useSharedValue(0);
    const bg = useSharedValue('green');

    // Khai báo style nhưng có animation
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
        margin: marginAnimation.value,
        backgroundColor: bg.value,
    }));

    const onPress = () => {
        offset.value = withRepeat(
            withSequence(
                withTiming(offset.value + 200, { duration: 1500 }),
                withTiming(offset.value, { duration: 1500 })
            ),
            -1,
            true
        );

        // marginAnimation.value = withTiming(marginAnimation.value + 8, { duration: 2000 });
        // bg.value = withTiming('blue', { duration: 1000 });
    }

    return (
        <>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button
                title='Press'
                onPress={onPress}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: '100%',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
    },
});
export default Sc3;