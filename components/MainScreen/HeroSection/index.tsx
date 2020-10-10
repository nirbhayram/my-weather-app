import {Spinner} from 'native-base';
import React from 'react'
import {StyleSheet, View} from 'react-native'
import {getFixedDigitNumber, getTime} from '../../../utils/utilities';
import InfoDisplay from './InfoDisplay';
import {City} from "../../../utils/typeDef";
import useGetCity from "../../../hooks/useGetCity";

const HeroSection = () => {
    const city: City | undefined = useGetCity();
    return (
        <View style={[styles.container,]}>
            {
                city ? (
                        [
                            {
                                icon: 'sun',
                                text: getTime(new Date(city.current.sunrise * 1000))
                            },
                            {
                                icon: 'umbrella-beach',
                                text: getTime(new Date(city.current.sunset * 1000))
                            },
                            {
                                icon: 'wind',
                                text: getFixedDigitNumber(city.current.windSpeed)
                            },
                            {
                                icon: 'cloud-sun-rain',
                                text: getFixedDigitNumber(city.current.pop * 100)
                            },
                            {
                                icon: 'bolt',
                                text: getFixedDigitNumber(city.current.uv)
                            },
                            {
                                icon: 'tint',
                                text: getFixedDigitNumber(city.current.dewDrops)
                            },
                        ].map(
                            (item) => (
                                <InfoDisplay key={item.icon} icon={item.icon} text={item.text}/>
                            )
                        )
                    ) :
                    (
                        <Spinner color='white'/>
                    )
            }
        </View>
    )
}

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
