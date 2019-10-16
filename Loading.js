import React from 'react';
import { View, Text, StyleSheet, StatusBar  } from 'react-native';

export default function Loading() {
    return (
    <View style={ styles.container }>
        <StatusBar barStyle="dark-content" />
        <Text style={ styles.text }>React Native Weather App 😎</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 40,
        paddingVertical: 120,
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2C2C2C",
        fontSize: 30
    }
});