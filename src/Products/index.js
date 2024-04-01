import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import Product from '../product';

export default function Products({route}) {
    const {refresh}=route?.params|| { refresh: false };
    console.log("para : ",route?.params.refresh)
    console.log("Refresh :",refresh)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://dummyjson.com/products/";

    const fetchData = () => {
        setLoading(true);
        fetch(url)
          .then((resp) => resp.json())
          .then((json) => {
            setData(json.products);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      };
    
      useEffect(() => {
        fetchData();
      }, [refresh])

    console.log(data)
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#000' }}>
            <ActivityIndicator color={'#fff'} />
        </View>
        );
    }

    const keyExtractor = (item) => item.id.toString();

    return (
        
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            numColumns={2}
            estimatedItemSize={200}
            renderItem={({ item }) => <Product items={item} />}
        />
    );
}
