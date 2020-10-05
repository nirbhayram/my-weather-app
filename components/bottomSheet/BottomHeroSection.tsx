import {observer} from 'mobx-react';
import {Spinner} from 'native-base';
import React from 'react'
import {StyleSheet, View} from 'react-native'
import store from '../../store/mobx/CityStore';
import {getFixedDigitNumber} from '../../utils/Utilities';
import BottomHeroSectionLabel from "./BottomHeroSectionLabel";
import BottomHeroTitleSection from './BottomHeroTitleSection';

const BottomSectionHeroSection = observer(() => {

    const fetching = store.fetching
    const city = store.city

    return (
        <View style={styles.container}>
            {
                fetching ? (
                    <Spinner color='#5C5C5C' />
                ) : (
                        <>
                            <BottomHeroTitleSection />
                            <View style={styles.horizontalRuler}></View>
                            <View style={styles.contentContainer}>
                                <BottomHeroSectionLabel keyText='Humidity' valueText={`${getFixedDigitNumber(city.current.humidity)} %`} />
                                <BottomHeroSectionLabel keyText='Wind' valueText={`${getFixedDigitNumber(city.current.windSpeed)} m/s`} />
                                <BottomHeroSectionLabel keyText='UV Index' valueText={getFixedDigitNumber(city.current.uv)} />
                                <BottomHeroSectionLabel keyText='Rain' valueText={`${getFixedDigitNumber(city.current.pop*100)} %`} />
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
