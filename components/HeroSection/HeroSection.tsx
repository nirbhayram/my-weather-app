import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TinyInfoDisplay from './TinyInfoDisplay';

const HeroSection = () => {
    return (
        <View style={styles.container}>
            <TinyInfoDisplay icon='sun' text="6:15 am" />
            <TinyInfoDisplay icon="umbrella-beach" text="5:26 pm" />
            <TinyInfoDisplay icon='wind' text="17 km/hr" />
            <TinyInfoDisplay icon='cloud-sun-rain' text="11%" />
            <TinyInfoDisplay icon='bolt' text="UV: 3" />
            <TinyInfoDisplay icon='tint' text="17%" />
        </View>
    )
}

export default HeroSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: "5%",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        // opacity: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(99, 128, 226,0.6)',
        flexWrap: "wrap",
        alignContent: "center",
        flexGrow: 1
    }
})
