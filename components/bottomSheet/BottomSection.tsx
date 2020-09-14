import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomSectionFlatList from './BottomSectionFlatList'
import BottomSectionHeroSection from './BottomSectionHeroSection'
import BottomSectionTitle from './BottomSectionTitle'

const BottomSection = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: "15%" }}>
                <BottomSectionTitle />
            </View>
            <View style={{height:"23%"}}>
                <BottomSectionHeroSection />
            </View>
            <View style={{height:"58%"}}>
                <BottomSectionFlatList/>
            </View>
        </View>
    )
}

export default BottomSection

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        justifyContent:"flex-start",
        backgroundColor: "#f0f3f5",
        height: "100%",
        paddingHorizontal: 20
    }
})
