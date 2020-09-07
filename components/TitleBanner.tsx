import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TitleBanner({ primaryText = "City name", secondaryText = "weather" }) {

    return (
        <View style={[styles.container]}>
            <Text style={styles.primary_title}>{primaryText}</Text>
            <Text style={styles.secondary_title}> {secondaryText} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    primary_title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center"
    },
    secondary_title: {
        fontSize: 15,
        color: "#C1C1C1",
        alignItems: "center"
    },
});
