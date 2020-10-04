import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import store from '../../store/mobx/CityStore';
import TinyInfoDisplay from './TinyInfoDisplay';

const HeroSection = observer(() => {

    const fetching = store?.response?.fetching || store?.response?.error ? true : false;
    const city  = store?.response?.data?.getCityByName

    function getTime(date: Date | undefined): string {
        return date ? `${date.getHours()}:${date.getMinutes()}` : ``;
    }

    function getNumber(param: number | undefined): number {
        return param ? param : 0;
    }

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
                                <TinyInfoDisplay icon='wind' text={`${parseFloat(`${city.current.windSpeed}`).toFixed(2)} m/s`} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='cloud-sun-rain' text={`${parseFloat(`${getNumber(city.current.pop) * 100}`).toFixed(2)} %`} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='bolt' text={`UV: ${parseFloat(`${getNumber(city.current.uv)}`).toFixed(2)}`} />
                            </View>
                            <View style={[styles.infoDisplay, { minWidth: Dimensions.get('screen').width / 4 }]}>
                                <TinyInfoDisplay icon='tint' text={parseFloat(`${getNumber(city.current.dewDrops)}`).toFixed(2)} />
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
