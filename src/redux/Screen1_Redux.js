import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { tang, giam, tangTheoGiaTri } from './Reducer'
import { useDispatch, useSelector } from 'react-redux'

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const Screen1_Redux = () => {
    const dispatch = useAppDispatch();
    const countState = useAppSelector((state) => state.counter);
    return (
      <View>
        <Text style={{fontSize: 30}}>Screen1: {countState.count}</Text>
      
        <Button title='Tang' onPress={() => dispatch(tang())} />
        <Button title='Giam' onPress={() => dispatch(giam())} />
        <Button title='Tang theo gia tri' 
              onPress={() => dispatch(tangTheoGiaTri(15))} />
      </View>
    )
  }
  

export default Screen1_Redux