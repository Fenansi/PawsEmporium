import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, Text, ActivityIndicator,Dimensions, TouchableOpacity } from "react-native";
import Divider from "../Components/Divider";

export default function Preview({ route }) {
    const {id}= route.params;
    console.log("Received id:",id); 
    const dimen=Dimensions.get('window').width-8;
    console.log("Dim : ",dimen);
    const [img,setImg]=useState(null);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "https://dummyjson.com/products/" + id;

    useEffect(() => {
        if (!id) return; // Check if id exists before fetching data
        fetch(url)
            .then((resp) => resp.json())
            .then((json) =>{
                setData(json);
                setImg(json.thumbnail); 
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [id]);

    console.log(data);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', alignItems: 'center' }}>
                <ActivityIndicator color={'#000'} />
            </View>
        );
    }
    // setImg(data.thumbnail);
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{alignItems:'center',marginTop:4,borderRadius:5}}>
                <Image source={data? { uri: img } : null } height={300} width={dimen} style={{borderRadius:5}}/>
            </View>
            <View style={{ flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
    alignItems: 'center',}}>
        <TouchableOpacity onPress={()=>setImg(data.thumbnail)}>        
            <Image source={data?.thumbnail ? { uri: data.thumbnail } : null }  style={{ width: 100, 
        borderRadius:5,
    height: 100, 
    resizeMode: 'cover', 
    marginHorizontal: 10,}} />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setImg(data.images[0])}>        
        <Image source={data?.images ? { uri: data.images[0] } : null }  style={{ width: 100, 
        borderRadius:5,
    height: 100, 
    resizeMode: 'cover', 
    marginHorizontal: 10,}} />
        </TouchableOpacity>

      </View>
            <Divider/>
            <View>
                <Text style={{color:'#000',textAlign:'center',fontSize:25,fontWeight:'bold'}}>{data.title?data.title:""}</Text>
                <Text style={{ color: '#525050',textAlign:'center',fontSize:20,fontWeight:'bold'}}>₹{data.price}</Text>

            </View>
            <Divider/>
            <View>
                <Text style={{color:'#000',paddingLeft:10,fontSize:18,}}>Other Details : </Text>
                <Text style={{color:'#000',paddingLeft:40,paddingTop:10,fontSize:14}}>Rating : {data.rating}</Text>
                <Text style={{color:'#000',paddingLeft:40,paddingTop:10,fontSize:14}}>Description : {data.description}</Text>
                <Text style={{color:'#000',paddingLeft:40,paddingTop:10,fontSize:14}}>discountPercentage : {data.discountPercentage}</Text>
                <Text style={{color:'#000',paddingLeft:40,paddingTop:10,fontSize:14}}>stock : {data.stock}</Text>
                <Text style={{color:'#000',paddingLeft:40,paddingTop:10,fontSize:14}}>Brand : {data.brand}</Text>
                
            </View>
        </ScrollView>
    );
}
