import React from 'react';
import {
 Image, StyleSheet, Text, View,
} from 'react-native';
import { Spinner } from 'native-base';
import { getDate } from '../../utils/utilities';
import { City } from '../../utils/typeDef';

const styles = StyleSheet.create({
    imageView: {
        width: 50,
        height: 40,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 5,
    },
    titleContainerDate: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleContainerTemprature: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: '#5C5C5C',
    },
    temperatureText: {
        fontSize: 20,
        paddingRight: 4,
        fontWeight: 'bold',
        color: '#5C5C5C',
    },
});
const HeroTitleSection = (prop: { city: City }) => {
    const { city } = prop;

    return city ? (
        <View style={styles.titleContainer}>
            <View style={styles.titleContainerDate}>
                <Image
                    style={styles.imageView}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${city?.dailyData[0]?.icon}@2x.png`,
                    }}
                />
                <Text style={styles.dateText}>
                    {getDate(new Date(city?.dailyData[0]?.date * 1000))}
                </Text>
            </View>
            <View style={styles.titleContainerTemprature}>
                <Text style={styles.temperatureText}>
                    {city.dailyData[0].maxTemperature}
°
                </Text>
                <Text>
{city.dailyData[0].minTemperature}
°
                </Text>
            </View>
        </View>
    ) : (
        <Spinner color="black" />
    );
};

export default HeroTitleSection;
