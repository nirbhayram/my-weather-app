import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";

const BottomSectionHeroSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.titleContainerDate}>
                    <Icon
                        name='cloud-showers-heavy'
                        type='font-awesome-5'
                        color='#4064e0'
                        size={30}
                        onPress={() => console.log('hello')} />
                    <Text style={{ fontSize: 15, paddingLeft: "5%", fontWeight: "bold", color: "#5C5C5C" }}>
                        Sun, 30 Aug
                    </Text>
                </View>
                <View style={styles.titleContainerTemprature}>
                    <Text style={{ fontSize: 20, paddingRight: "2%", fontWeight: "bold", color: "#5C5C5C" }}>
                        27°
                    </Text>
                    <Text>
                        27°
                    </Text>
                </View>
            </View>
            <View style={styles.horizontalRuler}></View>
            <View style={styles.contentContainer}>
                <View style={styles.contentContainerView}>
                    <Text style={styles.contentContainerViewKey}>Humidity</Text>
                    <Text style={styles.contentContainerViewValue}>17%</Text>
                </View>
                <View style={styles.contentContainerView}>
                    <Text style={styles.contentContainerViewKey}>Wind</Text>
                    <Text style={styles.contentContainerViewValue}>17 km/hr</Text>
                </View>
                <View style={styles.contentContainerView}>
                    <Text style={styles.contentContainerViewKey}>UV Index</Text>
                    <Text style={styles.contentContainerViewValue}>3</Text>
                </View>
                <View style={styles.contentContainerView}>
                    <Text style={styles.contentContainerViewKey}>Rain (%)</Text>
                    <Text style={styles.contentContainerViewValue}>11%</Text>
                </View>
            </View>
        </View>
    )
}

export default BottomSectionHeroSection

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // backgroundColor: "#000",
    },
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
    horizontalRuler: {
        height: "2%",
        backgroundColor: "#EBEBEB",
        marginBottom: "2%"
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "flex-start"
    },
    contentContainerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "45%",
        padding: "2%"
    },
    contentContainerViewKey: {
        fontSize: 15,
        paddingRight: "2%",
        fontWeight: "bold",
        color: "#5C5C5C"
    },
    contentContainerViewValue: {
    },
})
