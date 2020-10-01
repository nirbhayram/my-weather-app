import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import store from "../store/mobx/CityStore";

const Item = observer(({ time, icon, text }) => (
    <View style={[time === "Now" ? styles.componentNow : styles.component]}>
        <Text style={[time === "Now" ? styles.componentTitleTextNow : styles.componentTitleText]}>{time}</Text>
        <Image
            style={styles.imageView}
            source={{uri:`http://openweathermap.org/img/wn/${icon}@2x.png`}}
        />
        <Text style={[time === "Now" ? styles.componentBottomTextNow : styles.componentBottomText]}>{text}°</Text>
    </View>
))

const ForcastSection = observer(() => {

    function getTime(date:Date):string{
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    const renderItem = ({ item }) => (
        <Item time={getTime(item.time)} icon={item.weather.icon} text={item.temperature} />
    );

    return (
        <>
            {
                store.isEmpty ? (
                    <Spinner color='white' />
                ) : (
                        <FlatList
                            horizontal={true}
                            data={store.listCity[store.currentIndex].hourlyData.slice().filter((item,i)=>i<10)}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.time.getTime()}`}
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
    imageView:{
        width:50,
        height:50,
    }
})
