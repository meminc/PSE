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
 * Bottom Tab Navigator shown after successful login
 * - 2 tabs as an example Home and Settings
 */
function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="HomeTab"
                component={HomeScreen}
                options={{title: "Home"}}
            />
            <Tab.Screen 
                name="SettingsTab"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
        </Tab.Navigator>
    );
}


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

            {/* The bottom tabs */}
            <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={({ navigation }) => ({
                    title: "PSE Home",
                    // Add a top right Profile button:
                    headerRight: () => (
                        <Button 
                            onPress={() => navigation.navigate("Profile")}
                            title="Profile"
                        />
                    ),
                })}
            />
            {/* Profile screen (shown when pressing headerRight) */}
            <Stack.Screen 
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Profile"}}
            />
        </Stack.Navigator>
    );
}