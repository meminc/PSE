import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text>Another tab in your bottom navigation.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        marginBottom: 12
    },
});