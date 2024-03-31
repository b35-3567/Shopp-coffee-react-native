import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
/*
const CustomHeader = ({ leftIcon = null, centerText = null, rightIcon = null }) => {
    return (
        <View style={styles.container}>
            {leftIcon && (
                <TouchableOpacity onPress={leftIcon.onPress} style={styles.iconContainer}>
                    <Icon name={leftIcon.name} size={24} color="black" />
                </TouchableOpacity>
            )}
            {centerText && <Text style={styles.centerText}>{centerText}</Text>}
            {rightIcon && (
                <TouchableOpacity onPress={rightIcon.onPress} style={styles.iconContainer}>
                    <Icon name={rightIcon.name} size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
};
*/
const CustomHeader = ({ leftIcon = null, centerText = null, rightIcon = null }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {leftIcon && (
                    <TouchableOpacity onPress={leftIcon.onPress}>
                        <Icon1 name={leftIcon.name} size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
            <View>
            <Text style={styles.centerText}>{centerText}</Text>
            </View>
            <View style={styles.iconContainer}>
                {rightIcon && (
                    <TouchableOpacity onPress={rightIcon.onPress}>
                        <Icon name={rightIcon.name} size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 50,
        paddingHorizontal: 10,
    },
    iconContainer: {
        padding: 5,
    },
    centerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CustomHeader;
