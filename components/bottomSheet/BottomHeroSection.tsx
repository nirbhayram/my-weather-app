import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import store from '../../store/mobx/NewCityStore';
import BottomHeroSectionLabel from "./BottomHeroSectionLabel";
import BottomHeroTitleSection from './BottomHeroTitleSection';

const BottomSectionHeroSection = observer(() => {

    function getNumber(param: number | undefined): number {
        return param ? param : 0;
    }

    return (
        <View style={styles.container}>
            {
                store.getCityStoreObject.isLoading ? (
                    <Spinner color='#5C5C5C' />
                ) : (
                        <>
                            <BottomHeroTitleSection />
                            <View style={styles.horizontalRuler}></View>
                            <View style={styles.contentContainer}>
                                <BottomHeroSectionLabel keyText='Humidity' valueText={`${parseFloat(`${store.getCityStoreObject.city?.dailyData[0].humidity}`).toFixed(2)} %`} />
                                <BottomHeroSectionLabel keyText='Wind' valueText={`${parseFloat(`${store.getCityStoreObject.city?.dailyData[0].wind_speed}`).toFixed(2)} m/s`} />
                                <BottomHeroSectionLabel keyText='UV Index' valueText={`${parseFloat(`${store.getCityStoreObject.city?.dailyData[0].uvi}`).toFixed(2)}`} />
                                <BottomHeroSectionLabel keyText='Rain' valueText={`${parseFloat(`${getNumber(store.getCityStoreObject.city?.dailyData[0].probablity_precipitation) * 100}`).toFixed(2)} %`} />
                            </View>
                        </>
                    )
            }

        </View>
    )
})

export default BottomSectionHeroSection

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // backgroundColor: "#000",
    },
    horizontalRuler: {
        height: 3,
        backgroundColor: "#EBEBEB",
        marginBottom: 2
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "flex-start"
    }
})
