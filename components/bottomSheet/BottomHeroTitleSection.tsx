import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const BottomHeroTitleSection = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleContainerDate}>
                <Icon
                    name='cloud-showers-heavy'
                    type='font-awesome-5'
                    color='#4064e0'
                    size={30}
                    onPress={() => console.log('hello')} />
                <Text style={styles.dateText}>Sun, 30 Aug</Text>
            </View>
            <View style={styles.titleContainerTemprature}>
                <Text style={styles.temperatureText}>27°</Text>
                <Text>27°</Text>
            </View>
        </View>
    )
}

export default BottomHeroTitleSection

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "2%",
        paddingBottom: "5%"
    },
    titleContainerDate: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    titleContainerTemprature: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    dateText: {
        fontSize: 15,
        paddingLeft: "5%",
        fontWeight: "bold",
        color: "#5C5C5C"
    },
    temperatureText: {
        fontSize: 20,
        paddingRight: "2%",
        fontWeight: "bold",
        color: "#5C5C5C"
    }
})
