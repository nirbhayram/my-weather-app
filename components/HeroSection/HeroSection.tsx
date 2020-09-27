import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import store from '../../store/mobx/CityStore';
import TinyInfoDisplay from './TinyInfoDisplay';

const HeroSection = observer(() => {
    function getTime(date:Date): string{
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <View style={[styles.container,]}>
            {
                store.isEmpty ? (
                    <>
                        <Spinner color='white'/>
                    </>
                ) :
                    (
                        <>
                            <TinyInfoDisplay icon='sun' text={getTime(store.listCity[0].dailyData[0].sunrise)} load='false' />
                            <TinyInfoDisplay icon="umbrella-beach" text={getTime(store.listCity[0].dailyData[0].sunset)} load='false' />
                            <TinyInfoDisplay icon='wind' text={`${store.listCity[0].dailyData[0].wind_speed} m/s`} load='false' />
                            <TinyInfoDisplay icon='cloud-sun-rain' text={`${store.listCity[0].dailyData[0].probablity_precipitation*100} %`} load='false' />
                            <TinyInfoDisplay icon='bolt' text={`UV: ${store.listCity[0].dailyData[0].uvi}`} load='false' />
                            <TinyInfoDisplay icon='tint' text={`${store.listCity[0].dailyData[0].dew_drops}`} load='false' />
                        </>
                    )
            }
        </View>
    )
})

export default HeroSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        marginHorizontal:30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:'stretch',
        borderRadius: 20,
        backgroundColor: 'rgba(99, 128, 226,0.6)',
        flexWrap: "wrap",
        alignContent: "center",
        flexGrow: 1
    }
})
