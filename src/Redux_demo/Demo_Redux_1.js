// Demo_Redux_1.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const Demo_Redux_1 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://172.16.72.162:3000/products');
                const data = await response.json();
                console.log('data', data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products: ', error);

            }
        };

        fetchData();
    }, []);

    return (
        <View>
            <Text>Product List</Text>
            <FlatList
                data={ products }
                keyExtractor={ item => item._id }
                renderItem={ ({ item }) => (
                    <View>
                        <Text>{ item.name }</Text>
                        <Text>Price: { item.price }</Text>
                        <Text>Description: { item.description }</Text>
                        <Text>Category: { item.category }</Text>
                        <Text>Species: { item.species }</Text>
                        <Text>Size: { item.size }</Text>
                        <Text>Origin: { item.origin }</Text>
                        <Text>Images:</Text>
                        <FlatList
                            data={ item.images }
                            horizontal
                            keyExtractor={ (image, index) => index.toString() }
                            renderItem={ ({ item: image }) => (
                                <Image
                                    source={ { uri: image } }
                                    style={ { width: 100, height: 100, marginRight: 10 } }
                                />
                            ) }
                        />
                    </View>
                ) }
            />
        </View>
    );
};

export default Demo_Redux_1;
