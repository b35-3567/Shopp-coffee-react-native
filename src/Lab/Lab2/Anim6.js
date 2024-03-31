import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

export default Anim6 = () => {
    const position = useSharedValue({
        x: 0,
        y: 0,
        z: 0,
    })
    const color = useSharedValue('white')
    const position2 = useSharedValue({ x: 0, y: 0 })

    const targetX = width - styles.box.width
    const targetY = height * 0.5 - styles.box.height

    useEffect(() => {
        position.value = withRepeat(withTiming({
            x: targetX,
            y: targetY,
            z: 360,
        }, { duration: 900 }), -1, true)

        color.value = withRepeat(
            withSequence(
                withTiming('red', { duration: 300 }),
                withTiming('black', { duration: 300 }),
                withTiming('blue', { duration: 300 }),
            ), -1, true)

        position2.value = withRepeat(withSequence(
            withTiming({ x: targetX, y: 0 }, { duration: 900 }),
            withTiming({ x: targetX, y: targetY }, { duration: 900 }),
            withTiming({ x: 0, y: targetY }, { duration: 900 }),
            withTiming({ x: 0, y: 0 }, { duration: 900 }),
        ), -1)
    }, [])

    const style = useAnimatedStyle(() => ({
        transform: [
            { translateX: position.value.x },
            { translateY: position.value.y },
            { rotateZ: position.value.z + 'deg' },
        ],
        backgroundColor: color.value
    }))

    const style2 = useAnimatedStyle(() => ({
        transform: [
            { translateX: position2.value.x },
            { translateY: position2.value.y },
        ],
    }))
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Animated.View
                    style={[styles.box, style]}
                />
            </View>
            <View style={styles.section}>
                <Animated.View
                    style={[styles.box, style2]}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    section: {
        flex: 0.5,
       
    },
    container: {
        flex: 1,
    }
})