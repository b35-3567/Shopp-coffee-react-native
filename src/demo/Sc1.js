import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import Animated, { useSharedValue, 
    withTiming, withSpring } from 'react-native-reanimated';

const Sc1 = () => {
    const width = useSharedValue(100);
    const height =  useSharedValue(100);
    const bgColor = useSharedValue('#000');

    const handlePress = () => {
        // width.value = width.value + 50;
        width.value = withTiming(width.value + 50, 5000)
        height.value += 30;
        bgColor.value = withTiming('yellow', 5000)
    };

    return (
        <View>
            <Animated.View
                style={{
                    width: width,
                    height: height,
                    backgroundColor: bgColor,
                }}
            />
            <Button 
                title='Press'
                onPress={handlePress} />
        </View>
    )
}

export default Sc1

const styles = StyleSheet.create({})