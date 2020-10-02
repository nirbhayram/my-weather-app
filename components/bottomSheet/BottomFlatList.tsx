import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import store from '../../store/mobx/NewCityStore';
import { DailyWeather } from '../pojo/City';

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

const getDate = (date: Date): string => {
    return `${getDayFromNumber(date)}, ${date.getDate()} ${getMonthFromNumber(date)}`
}

const Item = observer((data: { icon: string, date: string, maxTemperature: number, minTemperature: number }) => (
    <View style={styles.titleContainer}>
        <View style={styles.titleContainerDate}>
            <Image
                style={styles.imageView}
                source={{ uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png` }}
            />
            <Text style={{ fontSize: 13, paddingLeft: "5%", fontWeight: "bold", color: "#5C5C5C" }}>{data.date}</Text>
        </View>
        <View style={styles.titleContainerTemprature}>
            <Text style={{ fontSize: 17, paddingRight: "5%", fontWeight: "bold", color: "#5C5C5C" }}>{data.maxTemperature}</Text>
            <Text style={{ paddingRight: "5%" }}>{data.minTemperature}</Text>
        </View>
    </View>
));

const BottomSectionFlatList = observer(() => {

    const renderItem = (data: { item: DailyWeather }) => (
        <Item
            icon={data.item.weather.icon}
            date={getDate(data.item.date)}
            maxTemperature={data.item.temperature_max}
            minTemperature={data.item.temperature_min} />
    );


    return (
        <View style={styles.container}>
            {
                store.getCityStoreObject.isLoading ? (
                    <Spinner color='#5c5c5c' />
                )
                    :
                    (
                        <FlatList
                            data={store.getCityStoreObject.city?.dailyData.slice().filter((item, i) => i < 10)}
                            renderItem={renderItem}
                            keyExtractor={item => item.date.toString()}
                        />
                    )
            }
        </View>
    )
})

export default BottomSectionFlatList

const styles = StyleSheet.create({
    imageView: {
        width: 35,
        height: 25
    },
    container: {
        flexDirection: "column",
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 15,
        marginBottom: 10
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5
    },
    titleContainerDate: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    titleContainerTemprature: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
})
