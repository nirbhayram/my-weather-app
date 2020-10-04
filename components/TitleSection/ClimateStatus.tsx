import { observer } from 'mobx-react'
import { stringifyKey } from 'mobx/lib/internal'
import { Spinner } from 'native-base'
import React, { useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import store from '../../store/mobx/CityStore'
import { City } from '../object/City'

const ClimateStatus = observer(() => {

    const fetching = store?.response?.fetching || store?.response?.error ? true : false;
    const city  = store?.response?.data?.getCityByName

    return (
        <View style={styles.climateStatus}>
            {
                fetching ?
                    (
                        <Spinner color='white' />
                    ) : (
                        <>
                            <Image
                                style={styles.imageView}
                                source={{ uri: `http://openweathermap.org/img/wn/${city?.current?.icon}@2x.png` }}
                            />
                            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                                <Text style={styles.climateStatusTemperature}>{city?.current?.temperature}°</Text>
                                <Text style={styles.climateStatusDescription}>{city?.current?.main}</Text>
                            </View>
                        </>
                    )
            }
        </View>
    )
})

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
