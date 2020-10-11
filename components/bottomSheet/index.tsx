import React from 'react'
import {StyleSheet, View} from 'react-native'
import BottomSectionFlatList from './FlatList'
import BottomSectionHeroSection from './HeroSection'
import BottomSectionTitle from './Title'

const BottomSection = () => {

    return (
        <View style={[styles.container]}>
            <BottomSectionTitle/>
            <BottomSectionHeroSection/>
            <BottomSectionFlatList/>
        </View>
    )
}

export default BottomSection

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "column",
            justifyContent: "flex-start",
            backgroundColor: "#f0f3f5",
            paddingHorizontal: 20,
            height: '100%'
        }
    }
)
