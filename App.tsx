import {NavigationContainer} from "@react-navigation/native";
import React from 'react';
import MainPage from "./src/pages/mainPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navbar from "./src/components/navbar";
import PostsList from "./src/components/postsList";
import addPost from "./src/components/addPost";
import Train from "./src/components/train";


export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MainPage} options={{headerShown: false}}/>
                <Stack.Screen name='addPost' component={addPost} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}