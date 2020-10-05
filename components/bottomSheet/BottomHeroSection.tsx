import {observer} from 'mobx-react';
import {Spinner} from 'native-base';
import React from 'react'
import {StyleSheet, View} from 'react-native'
import {getFixedDigitNumber} from '../../utils/utilities';
import BottomHeroSectionLabel from "./BottomHeroSectionLabel";
import BottomHeroTitleSection from './BottomHeroTitleSection';
import useGetCity from "../../hooks/useGetCity";

const BottomSectionHeroSection = observer(() => {
    const city = useGetCity()
    return (
        <View style={styles.container}>
            {
                city ? (
                    <>
                        <BottomHeroTitleSection/>
                        <View style={styles.horizontalRuler}></View>
                        <View style={styles.contentContainer}>
                            <BottomHeroSectionLabel keyText='Humidity'
                                                    valueText={`${getFixedDigitNumber(city.current.humidity)} %`}/>
                            <BottomHeroSectionLabel keyText='Wind'
                                                    valueText={`${getFixedDigitNumber(city.current.windSpeed)} m/s`}/>
                            <BottomHeroSectionLabel keyText='UV Index'
                                                    valueText={getFixedDigitNumber(city.current.uv)}/>
                            <BottomHeroSectionLabel keyText='Rain'
                                                    valueText={`${getFixedDigitNumber(city.current.pop * 100)} %`}/>
                        </View>
                    </>
                ) : (
                    <Spinner color='#5C5C5C'/>
                )
            }

        </View>
    )
})

export default BottomSectionHeroSection

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
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
