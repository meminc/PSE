// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome Home!</Text>
        <Text>This is one of the tabs in your bottom navigation.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 12
    }
});