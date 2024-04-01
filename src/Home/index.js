import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import Product from '../product';

export default function Home({ route }) {
    const { params } = route;
    console.log("Route params:", route.params);
    const {refresh}=route.params;
    console.log(refresh);
    const [refreshing, setRefreshing] = useState(params?.refresh || false); // State to track refreshing status
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
            setRefreshing(false); // Set refreshing to false after data fetching is complete
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
            setRefreshing(false); // Set refreshing to false in case of error
          });
      };
    
      useEffect(() => {
        
        fetchData();
      }, []);

      useEffect(() => {
        console.log("Refreshing data...");
        fetchData();
    }, [refresh]);
    

    const handleRefresh = () => {
        setRefreshing(true); // Set refreshing to true when pull-to-refresh is triggered
        fetchData(); // Fetch data again
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <ActivityIndicator color={'#000'} />
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
            refreshControl={ // Add RefreshControl to FlatList
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh} // Call handleRefresh function when pull-to-refresh is triggered
                />
            }
        />
    );
}
