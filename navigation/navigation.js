import React from "react";
import { Button } from "react-native"; // for the header-right button
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import your screens
import AuthScreen from "../screens/AuthScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
                options={{ 
                    title: "Sign Up",
                    headerShown: false
                }}
            />

            {/* Home Screen */}
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            {/* Profile screen (shown when pressing headerRight) */}
            <Stack.Screen 
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Profile" }}
            />
        </Stack.Navigator>
    );
}