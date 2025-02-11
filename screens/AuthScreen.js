import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";

export default function AuthScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Placeholder function
    const handleSignUp = () => {
        console.log("Sign up with", email, password);
        // TODO: Integrate sigh-up with logic (Firebase, custom backend, etc.)
    };

    const handleLogin = () => {
        ("Login with:", email, password);
        // TODO: Integrate logic
    };

    const handleGoogleLogin = () => {
        console.log("Log in with Google");
        // TODO: Integrate Google OAuth (via Expo Auth Session or other method)
    };

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to PSE</Text>
        <Text style={styles.subtitle}>Power System Engineering</Text>

        <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />

        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <Text style={styles.googleButtonText}>Log In with Google</Text>
        </TouchableOpacity>
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
        color: 'gray',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 12,
        fontSize: 16,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 6,
        marginBottom: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    googleButton: {
        borderColor: '#db4a39',
        borderWidth: 1,
        padding: 16,
        borderRadius: 6,
        alignItems: 'center',
    },
    googleButtonText: {
        color: '#db4a39',
        fontSize: 16,
        fontWeight: '600',
    },
});