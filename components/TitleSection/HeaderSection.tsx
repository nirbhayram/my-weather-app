import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";

const HeaderSection = () => {
    return (
        <View style={styles.navigationControl}>
            <Icon
                name='navicon'
                type='font-awesome'
                color='#fff'
                size={25} />
            <Icon
                name='bell-o'
                type='font-awesome'
                color='#fff'
                size={25} />
        </View>
    )
}

export default HeaderSection

const styles = StyleSheet.create({
    navigationControl: {
        flex: 0.3,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: Dimensions.get('window').width,
    },
})
