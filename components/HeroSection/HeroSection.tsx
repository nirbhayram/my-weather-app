import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import store from '../../store/mobx/CityStore';
import { getTime, getFixedDigitNumber } from '../utils/Utilities';
import TinyInfoDisplay from './TinyInfoDisplay';

const HeroSection = observer(() => {

    const fetching = store.fetching
    const city  = store.city

    return (
        <View style={[styles.container,]}>
            {
                fetching ? (
                    <>
                        <Spinner color='white' />
                    </>
                ) :
                    (
                        <>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='sun' text={getTime(new Date(city.current.sunrise *1000))} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon="umbrella-beach" text={getTime(new Date(city.current.sunset*1000))} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='wind' text={getFixedDigitNumber(city.current.windSpeed)} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='cloud-sun-rain' text={getFixedDigitNumber(city.current.pop*100)} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='bolt' text={getFixedDigitNumber(city.current.uv)} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='tint' text={getFixedDigitNumber(city.current.dewDrops)} />
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
    infoDisplay: {
        flex: 1,
        flexBasis: 'auto',
        flexGrow: 1
    }
})
