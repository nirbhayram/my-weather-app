import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomSectionTitle from './BottomSectionTitle'

const BottomSection = () => {
    return (
        <View style={styles.container}>
            <BottomSectionTitle/>
        </View>
    )
}

export default BottomSection

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        height:"100%",
        padding:20
    }
})
