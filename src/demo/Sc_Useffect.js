import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'


// js single thread

const Sc_Useffect = () => {
    /*
    useEffect 1:
    
    Mục đích: Gọi API từ https://cro101-b166e76cc76a.herokuapp.com/categories.
    Khi nào chạy: Chạy sau mỗi lần component được render.
    Dependency: Không có dependency được khai báo, do đó sẽ chạy mỗi khi component được render.
    useEffect 2:
    
    Mục đích: In ra "effect 2 running".
    Khi nào chạy: Chạy một lần đầu tiên sau khi component được render và không có dependency nào được khai báo.
    Dependency: Rỗng, nên chỉ chạy một lần đầu tiên sau khi component được render.
    useEffect 3:
    
    Mục đích: In ra "effect 3 running".
    Khi nào chạy: Chạy mỗi khi giá trị của biến state name thay đổi.
    Dependency: Chỉ có name được khai báo là dependency, nên useEffect này chỉ chạy khi giá trị của name thay đổi.
    useEffect 4:
    
    Mục đích: In ra "effect 4 running".
    Khi nào chạy: Chạy mỗi khi giá trị của biến state count thay đổi.
    Dependency: Chỉ có count được khai báo là dependency, nên useEffect này chỉ chạy khi giá trị của count thay đổi.
    */

    // useEffect: gọi api/ quản lý vòng đời của component
    // worker thread
    // synchronize: đồng bộ
    const [name, setName] = useState('nguyen van a')
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('effect 1 running')
        fetch('https://cro101-b166e76cc76a.herokuapp.com/categories')
            .then(data => data.json())
            .then(data => { })
            .catch(err => console.log(err));
        // dọn rác của component
        return () => {

        }
    },);

    useEffect(() => { console.log('effect 2 running') }, [])
    useEffect(() => { console.log('effect 3 running') }, [name])
    useEffect(() => { console.log('effect 4 running') }, [count])

    // ca 3: chạy 1 lần đầu tiên sau khi component render
    // th1: chạy khi state trong component thay đổi
    // th2: hết
    // th3: chạy khi state name đổi


    return (
        <View>
            <Text style={ { fontSize: 30 } }>Screen1: { name }</Text>
            <Button
                onPress={ () => setName(Math.random()) }
                title='abc'
            />
        </View>
    )
}

export default Sc_Useffect;

const styles = StyleSheet.create({})