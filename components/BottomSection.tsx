import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomSectionHeroSection from '../BottomSectionHeroSection'
import BottomSectionTitle from './BottomSectionTitle'

const BottomSection = () => {
    return (
        <View style={styles.container}>
            <View style={{height:"15%"}}>
                <BottomSectionTitle />
            </View>
            <BottomSectionHeroSection />
        </View>
    )
}

export default BottomSection

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
        paddingHorizontal: 20
    }
})
