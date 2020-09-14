import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomSectionFlatList from './BottomFlatList'
import BottomSectionHeroSection from './BottomHeroSection'
import BottomSectionTitle from './BottomTitleSection'

const BottomSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <BottomSectionTitle />
            </View>
            <View style={styles.heroSection}>
                <BottomSectionHeroSection />
            </View>
            <View style={styles.scrollView}>
                <BottomSectionFlatList />
            </View>
        </View>
    )
}

export default BottomSection

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#f0f3f5",
        height: "100%",
        paddingHorizontal: 20
    },
    titleSection: {
        height: "15%"
    },
    heroSection: {
        height: "23%"
    },
    scrollView: {
        height: "58%"
    }
})
