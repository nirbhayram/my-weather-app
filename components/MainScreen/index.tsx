import React from 'react'
import {GestureResponderEvent, StyleSheet, View} from 'react-native'
import ForcastSection from './ForcastSection'
import HeroSection from './HeroSection'
import ClimateStatus from './TitleSecondarySection'
import HeaderSection from './HeaderSection'
import Title from './TitlePrimarySection'

const MainScreen = (prop: { navigateToNavigationScreen: (event: GestureResponderEvent) => void }) => {
    return (
        <>
            <View style={styles.titleBanner}>
                <HeaderSection navigateToNavigationScreen={prop.navigateToNavigationScreen}/>
                <Title/>
                <ClimateStatus/>
            </View>
            <View style={styles.heroSection}>
                <HeroSection/>
            </View>
            <View style={styles.forcastSection}>
                <ForcastSection/>
            </View>
        </>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    titleBanner: {
        flex: 1,
        flexBasis: 'auto',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
    },
    heroSection: {
        flex: 0.8,
        flexBasis: 'auto',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        alignSelf: 'stretch'
    },
    forcastSection: {
        flex: 1,
        flexBasis: 'auto',
        fontSize: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 30
    }
})
