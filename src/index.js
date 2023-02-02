import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./Screens/Main";
import List from "./Screens/List";
import Detail from "./Screens/Detail";

function HomeScreen() {
    return (
        <Main/>
    );
}
function ListScreen() {
    return (
        <List/>
    );
}
function DetailScreen() {
    return (
        <Detail/>
    );
}
const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="List" component={ListScreen} options={({ route }) => ({ title: route.params.name,headerBackTitle:'Назад'  })} />
                <Stack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.name,headerBackTitle:'Назад'  })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;