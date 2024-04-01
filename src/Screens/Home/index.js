import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, Image } from 'react-native';
import Product from '../product';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stylesHome } from './style';
export default function Home({ route }) {
    const { params } = route;
    console.log("Route params:", route.params);
    const {refresh}=route.params;
    console.log(refresh);
    const [refreshing, setRefreshing] = useState(params?.refresh || false);
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
            setRefreshing(false); 
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
            setRefreshing(false); 
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
        setRefreshing(true); 
        console.log("here")
        fetchData(); 
    };

    if (loading) {
        return (
            <View style={localStyles.activityContainer}>
                <ActivityIndicator color={'#000'} />
            </View>
        );
    }

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={{backgroundColor:'#fff'}}>
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            numColumns={2}
            estimatedItemSize={200}
            renderItem={({ item }) => <Product items={item} />}
            refreshControl={ 
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh} 
                />
            }
        />
        <TouchableOpacity
                style={localStyles.fab}
                onPress={handleRefresh} >
                <Image source={require('../../../assets/images/refresh.png')} style={localStyles.fabText}/>
            </TouchableOpacity>
        </View>
    );
}
const localStyles = StyleSheet.create({
    activityContainer:{
         flex: 1, 
         justifyContent: 'center', 
         alignItems: 'center', 
         backgroundColor: '#fff' 
        },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#0C3540',
        borderRadius: 30,
        elevation: 8,
    },
    fabText: {
        height:22,
        width:22
    },
});