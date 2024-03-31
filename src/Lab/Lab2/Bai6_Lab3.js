import React from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    withSequence,
} from 'react-native-reanimated';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const duration = 800;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const Bai6_Lab3 = () => {
    const svRotation = useSharedValue(0);
    const svColor = useSharedValue(0);
    const x = useSharedValue(0);
    const y = useSharedValue(0);

    // Step 1: Rotation
    React.useEffect(() => {
        svRotation.value = withRepeat(withTiming(1, { duration, easing }), -1);
    }, []);

    // Step 2: Color change
    React.useEffect(() => {
        svColor.value = withRepeat(withTiming(1, { duration: 500, easing }), -1);
    }, []);

    const animatedStyleRotation = useAnimatedStyle(() => ({
        transform: [{ rotate: `${svRotation.value * 490}deg` }],
    }));

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: x.value }, { translateY: y.value }],
    }));

    const animatedStyleColor = useAnimatedStyle(() => ({
        backgroundColor: `hsl(${(svColor.value * 360).toFixed(0)}, 100%, 50%)`,
    }));

    const startAnimation = () => {
        x.value = withSequence(
            withTiming(-370, { duration: 1000, easing: Easing.linear }),
            withTiming(10, { duration: 1000, easing: Easing.linear })
        );

        y.value = withSequence(
            withTiming(400, { duration: 1000, easing: Easing.linear }),
            withTiming(0, { duration: 1000, easing: Easing.linear })
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', marginTop: 360 }}>
                <Animated.View style={[styles.box, animatedStyle, animatedStyleRotation, animatedStyleColor]} />
                <TouchableOpacity onPress={startAnimation}>
                    <Text style={{ marginLeft: 360 }}>startAnimation</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        marginLeft: 360
    },
});

export default Bai6_Lab3;
