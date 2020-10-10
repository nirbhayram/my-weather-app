import React from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import {Icon} from "react-native-elements";

const HeaderSection = (prop: { navigateToNavigationScreen: Function }) => {
    return (
        <View style={[styles.navigationControl, {width: Dimensions.get('window').width}]}>
            <Icon
                name='navicon'
                type='font-awesome'
                color='#fff'
                onPress={() => {
                    prop.navigateToNavigationScreen()
                }}
                size={25}/>
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
        flexBasis:'auto',
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
})