import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Snackbar } from "react-native-paper";
import { mockUserDB } from '../mockUserDB'; // <-- Import the mock DB

export default function AuthScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    // Placeholder function, Navigate to the SignUp Screen
    const handleSignUpNavigate = () => {
        navigation.navigate("SignUp");
        // TODO: Integrate sigh-up with logic (Firebase, custom backend, etc.)
    };

    // Check if the user exists; if yes, navigate to Home; otherwise show warning
    const handleLogin = () => {
        // TODO: Integrate logic
        const userFound = mockUserDB.find(
            (user) => user.email === email && user.password === password
        );

        if (userFound) {
            // Success: Navigate to Home
            navigation.navigate("Home");
        } else {
            // User doesn't exists or password mismatch
            /*
            Alert.alert(
                "Login Failed",
                "User not found or invalid credentials. Please try again."
            );
            */
            setErrorMsg('User not found or invalid credentials');
        }
    };

    const handleGoogleLogin = () => {
        console.log("Log in with Google");
        // TODO: Integrate Google OAuth (via Expo Auth Session or other method)
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>
                Welcome to PSE
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
                Power System Engineering
            </Text>

            <TextInput
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                mode="outlined"
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
            >
                Log In
            </Button>

            <Button
                mode="outlined"
                onPress={handleSignUpNavigate}
                style={styles.button}
            >
                Sign Up
            </Button>

            <Snackbar
                visible={!!errorMsg}
                onDismiss={() => setErrorMsg('')}
                duration={2000}
            >
                {errorMsg}
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 80,
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: 6,
    },
    subtitle: {
        marginBottom: 30,
    },
    input: {
        marginBottom: 12,
    },
    button: {
        marginBottom: 12,
    },
});