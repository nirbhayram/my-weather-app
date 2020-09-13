import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default function TitleBanner({ primaryText = "City name", secondaryText = "weather" }) {

    return (
        <View style={[styles.container]}>
            <View style={styles.navigationControl}>
                <Icon
                    name='rowing' />
            </View>
            <View style={[styles.textContainer]}>
                <Text style={styles.primary_title}>{primaryText}</Text>
                <Text style={styles.secondary_title}> {secondaryText} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    navigationControl: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textContainer: {
        flex: 1,
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
    