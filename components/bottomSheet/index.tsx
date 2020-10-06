import React from 'react'
import {StyleSheet, View} from 'react-native'
import BottomSectionFlatList from './BottomFlatList'
import BottomSectionHeroSection from './BottomHeroSection'
import BottomSectionTitle from './BottomTitleSection'

const Index = () => {

    return (
        <View style={[styles.container, {height: "100%"}]}>
            <View style={styles.titleSection}>
                <BottomSectionTitle/>
            </View>
            <View style={styles.heroSection}>
                <BottomSectionHeroSection/>
            </View>
            <View style={styles.scrollView}>
                <BottomSectionFlatList/>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#f0f3f5",
        paddingHorizontal: 20,
    },
    titleSection: {
        flexBasis: 'auto',
        marginBottom: 20
    },
    heroSection: {
        flexBasis: 'auto',
        marginBottom: 10
    },
    scrollView: {
        flexBasis: 'auto',
        flexShrink: 1,
        justifyContent: 'center',
    }
})
