import React from 'react';
import {Spinner} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {getFixedDigitNumber} from '../../utils/utilities';
import HeroSectionLabel from './HeroSectionLabel';
import HeroTitleSection from './HeroTitleSection';
import useGetCity from '../../hooks/useGetCity';
import {ICON_COLOR} from '../../utils/stylesConstants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexBasis: 'auto',
        marginBottom: 10,
    },
    horizontalRuler: {
        height: 3,
        backgroundColor: '#EBEBEB',
        marginBottom: 2,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
});

const BottomSectionHeroSection = () => {
    const city = useGetCity();
    return (
        <View style={styles.container}>
            {
                city ? (
                    <>
                        <HeroTitleSection city={city}/>
                        <View style={styles.horizontalRuler}/>
                        <View style={styles.contentContainer}>
                            {
                                [
                                    {keyText: 'Humidity', valueText: `${getFixedDigitNumber(city.current.humidity)} %`},
                                    {keyText: 'Wind', valueText: `${getFixedDigitNumber(city.current.windSpeed)} m/s`},
                                    {keyText: 'UV Index', valueText: getFixedDigitNumber(city.current.uv)},
                                    {keyText: 'Rain', valueText: `${getFixedDigitNumber(city.current.pop * 100)} %`},
                                ]
                                    .map((item) => (
                                        <HeroSectionLabel
                                            key={item.keyText}
                                            keyText={item.keyText}
                                            valueText={item.valueText}
                                        />
                                    ))
                            }
                        </View>
                    </>
                ) : (
                    <Spinner color={ICON_COLOR}/>
                )
            }

        </View>
    );
};

export default BottomSectionHeroSection;
