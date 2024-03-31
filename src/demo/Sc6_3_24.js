import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext, createContext, useEffect } from 'react'
const AppContext = createContext();
const ContextProvider = props => {
    const { children } = props;
    const [colors, setColors] = useState([])
    console.log(colors)
    return (
        <AppContext.Provider value={{ colors, setColors }}>
            {children}
        </AppContext.Provider>
    )
}

const Screen2 = props => {
    const { colors, setColors } = useContext(AppContext);

    const changeColor = () => {
        // random hex color code
        let newColors = [];
        for (let index = 0; index < 4; index++) {
            const value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            // #fffff
            newColors[index] = value;
        }
        setColors(newColors)
    }
    console.log('>>>>>>', colors)
    return (
        <>
            <Button
                title='Nhấn đi'
                onPress={() => changeColor()}
            />
            <View style={{ width: 50, height: 50, backgroundColor: colors[0] }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: colors[1] }}></View>
        </>
    )
}

const Screen3 = props => {
    const { colors, changeColor } = useContext(AppContext);
    console.log(colors);
    return (
        <>
            <View style={{ width: 50, height: 50, backgroundColor: colors[2] }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: colors[3] }}></View>
        </>
    )
}
const Sc6_3_24 = () => {
  return (
    <ContextProvider>
    <Screen2 />
    <Screen3 />
</ContextProvider>
  )
}

export default Sc6_3_24