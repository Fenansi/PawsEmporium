import React, { useEffect }  from 'react'
import { Image, StyleSheet, Text, View,TextInput } from 'react-native'
export const styles=StyleSheet.create({
    mainContainer:{
      height:"100%",
      paddingHorizontal:30,
      paddingTop:30,
      backgroundColor:"#fff"
    },
  
      container: {
          // marginVertical:100,
          justifyContent: 'center',
          alignItems: 'center',
        },
        
        logo: {
          width: 300,
          height: 300,
        },
        label:{
            fontSize:18,
            color:"#0C3540"
        },
        textInput:{
            borderRadius:5,
            borderColor:"#2b1d00",
            borderWidth: 1,
            marginTop:5,
            fontSize:17,
            color:'#000',
            paddingHorizontal:10,
            
        },
        btn:{
            padding:15,
            backgroundColor:"#0C3540",
            borderRadius:8,
            
        },
        txt:{
            color:'#fff',
            fontSize:18,
            textAlign:'center'
        }
  })