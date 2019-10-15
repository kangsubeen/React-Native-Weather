import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
    <View style={ styles.container }>
        <Text style={ styles.text }>Gettiing the React Native Weather</Text>
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