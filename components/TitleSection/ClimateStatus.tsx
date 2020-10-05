import {Spinner} from 'native-base'
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {City} from "../../utils/typeDef";
import useGetCity from "../../hooks/useGetCity";

const ClimateStatus = () => {
    const city: City | undefined = useGetCity();
    return (
        <View style={styles.climateStatus}>
            {
                city ?
                    (
                        <>
                            <Image
                                style={styles.imageView}
                                source={{uri: `http://openweathermap.org/img/wn/${city?.current?.icon}@2x.png`}}
                            />
                            <View style={{flexDirection: "column", justifyContent: "center", alignItems: "flex-start"}}>
                                <Text style={styles.climateStatusTemperature}>{city?.current?.temperature}°</Text>
                                <Text style={styles.climateStatusDescription}>{city?.current?.main}</Text>
                            </View>
                        </>
                    ) : (
                        <Spinner color='white'/>
                    )
            }
        </View>
    )
}

export default ClimateStatus

const styles = StyleSheet.create({
    imageView: {
        width: 100,
        height: 100
    },
    climateStatus: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'stretch'
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
