import {NavigationContainer} from "@react-navigation/native";
import React from 'react';
import { Provider } from 'react-redux';
import store from "./src/store";
import MainPage from "./src/pages/mainPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={MainPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
  );
}

