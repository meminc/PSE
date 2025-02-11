import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import AuthScreen from "../screens/AuthScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

/** 
 * Root Navigation Component
 * - Defines a Stack Navigator for the app
*/
export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: "Sign Up"}}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home"}}
            />
        </Stack.Navigator>
    );
}