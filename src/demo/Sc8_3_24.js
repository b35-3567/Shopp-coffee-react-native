import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useMemo } from 'react'

const Sc8_3_24 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const tinhToan = useMemo(
        () => {
        console.log('Tinhtoan running....')
        return (count * count)
    }, [count])

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Screen1: {count}</Text>
            <Text style={{ fontSize: 30 }}>Tinh toan: {tinhToan}</Text>
            <Button
                onPress={() => setCount(Math.round(Math.random() * 10))}
                title='Count'
            />

            <Text style={{ fontSize: 30 }}>Screen1: {name}</Text>
            <Button
                onPress={() => setName(Math.random())}
                title='Click'
            />
        </View>
    )
}


export default Sc8_3_24