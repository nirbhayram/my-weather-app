import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ForcastSection from './ForcastSection'
import HeroSection from './HeroSection/HeroSection'
import ClimateStatus from './TitleSection/ClimateStatus'
import HeaderSection from './TitleSection/HeaderSection'
import Title from './TitleSection/Title'

const MainScreen = () => {
    return (
        <>
            <View style={styles.titleBanner}>
                <HeaderSection />
                <Title />
                <ClimateStatus />
            </View>
            <View style={styles.heroSection}>
                <HeroSection />
            </View>
            <View style={styles.forcastSection}>
                <ForcastSection />
            </View>
        </>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    titleBanner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
    },
    heroSection: {
        flex: 0.8,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        width: Dimensions.get('window').width
    },
    forcastSection: {
        flex: 1,
        fontSize: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 30
    }
})
