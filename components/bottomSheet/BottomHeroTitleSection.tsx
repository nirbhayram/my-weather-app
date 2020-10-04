
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import store from '../../store/mobx/CityStore'

const BottomHeroTitleSection = () => {

    const city = store.city

    const getDayFromNumber = (date: Date): string => {
        switch (date.getDay()) {
            case 0:
                return `Sun`
            case 1:
                return `Mon`
            case 2:
                return `Tue`
            case 3:
                return `Wed`
            case 4:
                return `Thu`
            case 5:
                return `Fri`
            default:
                return `Sat`
        }
    }

    const getMonthFromNumber = (date: Date): string => {
        switch (date.getMonth()) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            default:
                return 'Dec';
        }
    }

    const getDate = (date: Date| undefined): string => {
        return date ?`${getDayFromNumber(date)}, ${date.getDate()} ${getMonthFromNumber(date)}`:``;
    }

    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleContainerDate}>
                <Image
                    style={styles.imageView}
                    source={{uri:`http://openweathermap.org/img/wn/${city?.dailyData[0]?.icon}@2x.png`}}
                />
                <Text style={styles.dateText}>{getDate(new Date(city?.dailyData[0]?.date*1000))}</Text>
            </View>
            <View style={styles.titleContainerTemprature}>
                <Text style={styles.temperatureText}>{city.dailyData[0].maxTemperature}°</Text>
                <Text>{city.dailyData[0].minTemperature}°</Text>
            </View>
        </View>
    )
}

export default BottomHeroTitleSection

const styles = StyleSheet.create({
    imageView: {
        width: 50,
        height: 40
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 2,
        paddingBottom: 5
    },
    titleContainerDate: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    titleContainerTemprature: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    dateText: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: "bold",
        color: "#5C5C5C"
    },
    temperatureText: {
        fontSize: 20,
        paddingRight: 4,
        fontWeight: "bold",
        color: "#5C5C5C"
    }
})
