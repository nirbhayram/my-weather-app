import {observer} from 'mobx-react';
import {Spinner} from 'native-base';
import React from 'react'
import {StyleSheet, View} from 'react-native'
import {getFixedDigitNumber} from '../../utils/utilities';
import HeroSectionLabel from "./HeroSectionLabel";
import HeroTitleSection from './HeroTitleSection';
import useGetCity from "../../hooks/useGetCity";

const BottomSectionHeroSection = observer(() => {
    const city = useGetCity()
    return (
        <View style={styles.container}>
            {
                city ? (
                    <>
                        <HeroTitleSection/>
                        <View style={styles.horizontalRuler}/>
                        <View style={styles.contentContainer}>
                            <HeroSectionLabel keyText='Humidity'
                                              valueText={`${getFixedDigitNumber(city.current.humidity)} %`}/>
                            <HeroSectionLabel keyText='Wind'
                                              valueText={`${getFixedDigitNumber(city.current.windSpeed)} m/s`}/>
                            <HeroSectionLabel keyText='UV Index'
                                              valueText={getFixedDigitNumber(city.current.uv)}/>
                            <HeroSectionLabel keyText='Rain'
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
