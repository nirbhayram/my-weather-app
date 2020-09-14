import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const ClimateStatus = () => {
    return (
        <View style={styles.climateStatus}>
            <Icon
                style={styles.climateStatusIcon}
                name='cloud'
                type='font-awesome'
                color='#fff'
                size={100} />
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                <Text style={styles.climateStatusTemperature}>27°</Text>
                <Text style={styles.climateStatusDescription}>cloudy</Text>
            </View>
        </View>
    )
}

export default ClimateStatus

const styles = StyleSheet.create({
    climateStatus: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,

    },
    climateStatusIcon: {
        paddingRight: 10
    },
    climateStatusTemperature: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
        paddingLeft: 10,
    },
    climateStatusDescription: {
        fontSize: 25,
        color: "#ccc",
        paddingLeft: 10
    }
})
