import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const HeroSectionLabel = ({keyText = "Humidity", valueText = "17%"}) => {
    return (
        <View style={styles.contentContainerView}>
            <Text style={styles.contentContainerViewKey}>{keyText}</Text>
            <Text style={styles.contentContainerViewValue}>{valueText}</Text>
        </View>
    )
}

export default HeroSectionLabel

const styles = StyleSheet.create({
    contentContainerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
        padding: "2%"
    },
    contentContainerViewKey: {
        fontSize: 15,
        paddingRight: "2%",
        fontWeight: "bold",
        color: "#5C5C5C"
    },
    contentContainerViewValue: {},
})
