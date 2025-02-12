import React, { use, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Snackbar } from "react-native-paper";
import { mockUserDB } from "../mockUserDB";

export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSignUp = () => {
        // Check if user already exists
        const existingUser = mockUserDB.find((user) => user.email === email);

        if (existingUser) {
            setErrorMsg('User already exists!');
            return;
        }
        
        // Otherwise, create user in mock DB
        mockUserDB.push({ email, password });
        setSuccessMsg('Account created! You can log in now.');
    }

    const handleCreateAccount = () => {
        // Check if user already exists
        const existingUser = mockUserDB.find((user) => user.email === email);

        if (existingUser) {
            Alert.alert(
                "Account exists",
                "This email is already associated with an account."
            );
            return;
        }

        // Otherwise, create user in mock DB
        mockUserDB.push({ email, password });
        Alert.alert("Success", "User account created. You can log in now.");

        // Ooptionally navigate back to Auth to log in
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineSmall" style={styles.title}>
                Create an Account
            </Text>

            {/* Email Input */}
            <TextInput
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
            />

            {/* Password Input */}
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
                onPress={handleSignUp}
                style={styles.button}
            >
                Sign Up
            </Button>

            <Button
                mode="outlined"
                onPress={() => navigation.goBack()}
                style={styles.button}
            >
                Back to Log In
            </Button>

            <Snackbar
                visible={!!errorMsg}
                onDismiss={() => setErrorMsg('')}
                duration={2000}
            >
                {errorMsg}
            </Snackbar>
            <Snackbar
                visible={!!successMsg}
                onDismiss={() => setSuccessMsg('')}
                duration={2000}
            >
                {successMsg}
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
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        marginBottom: 12,
    },
    button: {
        marginBottom: 12,
    },
});

