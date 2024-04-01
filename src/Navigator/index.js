import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../Screens/Login';
import Home from '../Screens/Home';
import Product from '../Screens/product';
import Preview from '../Screens/View';

const Stack = createNativeStackNavigator();

function Navigator() {
    

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                          name="Login" 
                          component={Login} 
                          options={{ headerShown: false }} 
                />
                <Stack.Screen 
                        name="View" 
                        component={Preview} 
                        options={{ title: 'NovaMarket', 
                                    headerTintColor: '#fff', 
                                    headerTitleAlign: 'center', 
                                    headerStyle: { backgroundColor: '#0C3540' } }} 
                />
                <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{
                          title: 'NovaMarket',
                          headerTintColor: '#fff',
                          headerTitleAlign: 'center',
                          headerStyle: { backgroundColor: '#0C3540' },
            
                      }}
                   
                />
                <Stack.Screen 
                        name="Product" 
                        component={Product} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;

