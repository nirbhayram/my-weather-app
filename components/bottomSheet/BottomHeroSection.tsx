import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import store from '../../store/mobx/CityStore';
import BottomHeroSectionLabel from "./BottomHeroSectionLabel";
import BottomHeroTitleSection from './BottomHeroTitleSection';

const BottomSectionHeroSection = observer(() => {
    return (
        <View style={styles.container}>
            {
                store.isEmpty ? (
                    <Spinner color='#5C5C5C' />
                ) : (
                        <>
                            <BottomHeroTitleSection />
                            <View style={styles.horizontalRuler}></View>
                            <View style={styles.contentContainer}>
                                <BottomHeroSectionLabel keyText='Humidity' valueText={`${store.listCity[0].dailyData[0].humidity} %`} />
                                <BottomHeroSectionLabel keyText='Wind' valueText={`${store.listCity[0].dailyData[0].wind_speed} m/s`}  />
                                <BottomHeroSectionLabel keyText='UV Index' valueText={`${store.listCity[0].dailyData[0].uvi}`} />
                                <BottomHeroSectionLabel keyText='Rain' valueText={`${store.listCity[0].dailyData[0].probablity_precipitation*100} %`} />
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
        height: "2%",
        backgroundColor: "#EBEBEB",
        marginBottom: "2%"
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "flex-start"
    }
})
