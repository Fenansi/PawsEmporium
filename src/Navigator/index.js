import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../Login';
import Home from '../Home';
import Product from '../product';
import Preview from '../View';
import { TouchableOpacity, Text } from 'react-native';
import Products from '../Products';

const Stack = createNativeStackNavigator();

function Navigator() {
    const [refresh, setRefresh] = useState(false); // State to track refresh

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="View" component={Preview} options={{ title: 'NovaMarket', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#0C3540' } }} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        title: 'NovaMarket',
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#0C3540' },
                        headerRight: () => (
                          <TouchableOpacity onPress={() => navigation.setParams({ refresh: true })}>
                            <Text style={{ color: '#fff', marginRight: 15 }}>Refresh</Text>
                        </TouchableOpacity>
                        
                        ),
                    })}
                    initialParams={{ refresh: refresh }} // Pass refresh parameter to Home screen
                />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Products" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
