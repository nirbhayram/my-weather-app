import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import store from "../../store/mobx/CityStore";
import { City, HourlyWeather } from '../object/City';

const Item = observer((data: { time: string, icon: string, text: number }) => (
    <View style={[data.time === "Now" ? styles.componentNow : styles.component]}>
        <Text style={[data.time === "Now" ? styles.componentTitleTextNow : styles.componentTitleText]}>{data.time}</Text>
        <Image
            style={styles.imageView}
            source={{ uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png` }}
        />
        <Text style={[data.time === "Now" ? styles.componentBottomTextNow : styles.componentBottomText]}>{data.text}°</Text>
    </View>
))

const ForcastSection = observer(() => {

    const fetching = store.fetching
    const city = store.city

    function getTime(date: Date): string {
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    const renderItem = (data: { item: { time: number, icon: string, temperature: number } }) => (
        <Item time={getTime(new Date(data.item.time * 1000))} icon={data.item.icon} text={data.item.temperature} />
    );

    return (
        <>
            {
                fetching ? (
                    <Spinner color='white' />
                ) : (
                        <FlatList
                            horizontal={true}
                            data={city.hourData}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.time}`}
                        />
                    )
            }
        </>
    )
})

export default ForcastSection

const styles = StyleSheet.create({
    component: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 120,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        marginLeft: 10,
        marginRight: 10
    },
    componentNow: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 120,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        marginLeft: 10,
        marginRight: 10
    },
    componentTitleText: {
        color: "#fff",
        fontSize: 15,
        paddingBottom: 5,
    },
    componentTitleTextNow: {
        fontSize: 15,
        paddingBottom: 5,
    },
    componentIcon: {
        paddingBottom: 10,
    },
    componentBottomText: {
        color: "#fff",
        fontSize: 15,
        paddingBottom: 5,
    },
    componentBottomTextNow: {
        fontSize: 15,
        paddingBottom: 5,
    },
    imageView: {
        width: 50,
        height: 50,
    }
})
