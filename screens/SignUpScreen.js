import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from "react-native";
import { mockUserDB } from "../mockUserDB";

export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <Text style={styles.title}>Create an Account</Text>

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
            />

            {/* Create Account Button */}
            <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Go Back Button (Optional) */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back to Login</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
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
    backButton: {
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 16,
        borderRadius: 6,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
    },
});
