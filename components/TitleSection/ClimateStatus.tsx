import { observer } from 'mobx-react'
import { Spinner } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import store from '../../store/mobx/CityStore'

const ClimateStatus = observer(() => {
    return (
        <View style={styles.climateStatus}>
            {
                store.isEmpty ?
                    (
                        <Spinner color='white'/>
                    ) : (
                        <>
                            <Icon
                                style={styles.climateStatusIcon}
                                name='cloud'
                                type='font-awesome'
                                color='#fff'
                                size={100} />
                            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                                <Text style={styles.climateStatusTemperature}>{store.listCity[0].temperature}°</Text>
                                <Text style={styles.climateStatusDescription}>{store.listCity[0].weather.main}</Text>
                            </View>
                        </>
                    )
            }
        </View>
    )
})

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
