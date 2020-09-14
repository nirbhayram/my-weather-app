import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import BottomHeroSectionLabel from "./BottomHeroSectionLabel";
import BottomHeroTitleSection from './BottomHeroTitleSection';

const BottomSectionHeroSection = () => {
    return (
        <View style={styles.container}>
            <BottomHeroTitleSection/>
            <View style={styles.horizontalRuler}></View>
            <View style={styles.contentContainer}>
                <BottomHeroSectionLabel keyText='Humidity' valueText='17%' />
                <BottomHeroSectionLabel keyText='Wind' valueText='17 km/hr' />
                <BottomHeroSectionLabel keyText='UV Index' valueText='3' />
                <BottomHeroSectionLabel keyText='Rain' valueText='11%' />
            </View>
        </View>
    )
}

export default BottomSectionHeroSection

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // backgroundColor: "#000",
    },
    horizontalRuler: {
        height: "2%",
        backgroundColor: "#EBEBEB",
        marginBottom: "2%"
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "flex-start"
    }
})
