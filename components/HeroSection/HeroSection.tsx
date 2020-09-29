import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import store from '../../store/mobx/CityStore';
import TinyInfoDisplay from './TinyInfoDisplay';

const HeroSection = observer(() => {
    function getTime(date: Date): string {
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <View style={[styles.container,]}>
            {
                store.isEmpty ? (
                    <>
                        <Spinner color='white' />
                    </>
                ) :
                    (
                        <>
                            <View style={[styles.infoDisplay,{minWidth:Dimensions.get('screen').width/4}]}>
                                <TinyInfoDisplay icon='sun' text={getTime(store.listCity[store.currentIndex].dailyData[0].sunrise)} />
                            </View>
                            <View style={[styles.infoDisplay,{minWidth:Dimensions.get('screen').width/4}]}>
                                <TinyInfoDisplay icon="umbrella-beach" text={getTime(store.listCity[store.currentIndex].dailyData[0].sunset)} />
                            </View>
                            <View style={[styles.infoDisplay,{minWidth:Dimensions.get('screen').width/4}]}>
                                <TinyInfoDisplay icon='wind' text={`${parseFloat(`${store.listCity[store.currentIndex].dailyData[0].wind_speed}`).toFixed(2)} m/s`} />
                            </View>
                            <View style={[styles.infoDisplay,{minWidth:Dimensions.get('screen').width/4}]}>
                                <TinyInfoDisplay icon='cloud-sun-rain' text={`${parseFloat(`${store.listCity[store.currentIndex].dailyData[0].probablity_precipitation * 100}`).toFixed(2)} %`} />
                            </View>
                            <View style={[styles.infoDisplay,{minWidth:Dimensions.get('screen').width/4}]}>
                                <TinyInfoDisplay icon='bolt' text={`UV: ${parseFloat(`${store.listCity[store.currentIndex].dailyData[0].uvi}`).toFixed(2)}`} />
                            </View>
                            <View style={[styles.infoDisplay,{minWidth:Dimensions.get('screen').width/4}]}>
                                <TinyInfoDisplay icon='tint' text={parseFloat(`${store.listCity[store.currentIndex].dailyData[0].dew_drops}`).toFixed(2)} />
                            </View>
                        </>
                    )
            }
        </View>
    )
})

export default HeroSection

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row",
        padding: 10,
        marginHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'stretch',
        borderRadius: 20,
        backgroundColor: 'rgba(99, 128, 226,0.6)',
        flexWrap: "wrap",
        alignContent: "center",
        flexGrow: 1,
        flexBasis: 'auto'
    },
    infoDisplay:{
        flex:1,
        flexBasis:'auto',
        flexGrow:1
    }
})
