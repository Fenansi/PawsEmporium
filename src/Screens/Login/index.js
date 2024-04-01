import React, { useEffect }  from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,ToastAndroid, Platform, AlertIOS,Alert, ScrollView } from 'react-native'
import { useState } from "react";
import { styles } from './style';
import { useNavigation,StackActions} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

export const Login=()=> {

    const [username, setUsername] = useState("");
    const [pw, setPw] = useState("");
    const [validUsername, setValidUsername] = useState(false);
    const [usernameError,setUsernameError]=useState("");
    const [validPw, setValidPw] = useState(false);
    const [pwError,setPwError]=useState("");
    const navigation=useNavigation();
    const [fm,setFm]=useState(false);
    function onLogin(){

      if(username==''){
        setValidUsername(true);
        setUsernameError("Please enter the username");
      }
      else{
        setValidUsername(false);
        setUsernameError("");
      }
      if(pw==''){
        setValidPw(true);
        setPwError("Please enter the password");
      }
      else{
        if(pw.length<8){
          setValidPw(true);
          setPwError("Password should contains minimum 8 characters");
        }
        else{
          setValidPw(false);
          setPwError("");
        }
      }
      if(usernameError==""&&pwError==""){

        console.log(username);
        console.log(pw)

        if(username.trim()=='Fenansi'&&pw.trim()=='Fenansi@1234'){

          
            Snackbar.show({
              text:"You\'re successfully Logged In.", 
              duration:Snackbar.LENGTH_SHORT, 
              rtl:true, 
              backgroundColor:"#5c855b",
          });

            navigation.dispatch(
              StackActions.replace('Home',{refresh:false})
            );
            
            
        }
        else{
          if(fm){
            
            if (Platform.OS === 'android') {
              Alert.alert("Authentication","Incorrect Username or Password");
            } else {
              AlertIOS.alert('Login failed.');
            }
          }
          setFm(true)
        }
        

      }
      
    }

  return <ScrollView><View style={styles.mainContainer}>
  <View style={styles.container}>
    <Image  source={require('../../../assets/images/login.png')} style={styles.logo}/>
    </View>
    <View>
      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput
              style={styles.textInput}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholderTextColor="#6b6b6b"
            />
            <Text style={{color:'red'}}>{validUsername?usernameError:''}</Text>
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
              style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true} 
                value={pw}
                placeholderTextColor="#6b6b6b"
                onChangeText={(text) => setPw(text)}
            />
            <Text style={{color:'red'}}>{validPw?pwError:''}</Text>
      </View>
      <View style={{marginTop:15}}>
        <TouchableOpacity onPress={onLogin} style={styles.btn} activeOpacity={1}> 
        <Text style = {styles.txt}>
            Log In
        </Text>
      </TouchableOpacity >
      </View>
    </View>
    
  
  </View>
  </ScrollView>
}
