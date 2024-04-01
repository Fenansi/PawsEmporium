import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Touchable, TouchableOpacity } from 'react-native';



export default function Product({ items }) {
    const { title, thumbnail, price,id } = items;
    const navigation=useNavigation()
    function Onclick(){
        console.log(id);
        navigation.navigate('View', { id: id });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={Onclick}>
            <View style={styles.product}>
                <View style={{ borderRadius: 6, marginBottom: 5, padding: 3 }}>
                    <Image source={{ uri: thumbnail }} style={styles.image} />
                    <View style={{ paddingTop: 5 , margin: 3}}>
                        <Text style={{ color: '#000', }}>{title.length < 23 ? title : title.substring(0, 20) + "..."}</Text>
                        <Text style={{ color: '#000' }}>₹{price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        
    },
    product: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        borderRadius: 6,
        marginBottom: 5,
        padding: 3,
           },
    image: {
        height: 170,
        width: 170, 
        borderRadius: 6,
    },
});
