import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

const ScGesture = () => {
    const translationX = new Animated.Value(0);
    const translationY = new Animated.Value(0);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX, translationY } }],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = event => {
        if (event.nativeEvent.state === State.END) {
            console.log('Gesture ended');
            translationX.setValue(0);
            translationY.setValue(0);
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <Text>Drag me!</Text>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform: [{ translateX: translationX }, { translateY: translationY }]
                        }
                    ]}
                />
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginTop: 20,
    },
});

export default ScGesture;
