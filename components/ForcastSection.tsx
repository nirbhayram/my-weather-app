import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Icon } from "react-native-elements";
import store from "../store/mobx/CityStore";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 'Now',
        icon: 'http://openweathermap.org/img/wn/10d@2x.png',
        text: '27°'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: '12 AM',
        icon: 'sun',
        text: '27°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: '3 AM',
        icon: 'wind',
        text: '27°'
    },
    {
        id: '58694a0f3da1-471f-bd96-14551e29d72',
        title: 'Third Item',
        time: '6 AM',
        icon: 'bolt',
        text: '27°'
    },
    {
        id: '58694a0f-3da1-471f-b96-145571e29d72',
        title: 'Third Item',
        time: '9 AM',
        icon: 'tint',
        text: '27°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14551e29d72',
        title: 'Third Item',
        time: '12 PM',
        icon: 'cloud-sun-rain',
        text: '27°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2972',
        title: 'Third Item',
        time: '3 PM',
        icon: 'cloud-sun-rain',
        text: '27°'
    },
    {
        id: '58694a0-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: '6 PM',
        icon: 'cloud-sun-rain',
        text: '27°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14571e29d72',
        title: 'Third Item',
        time: '9 PM',
        icon: 'cloud-sun-rain',
        text: '27°'
    }
];

const Item = observer(({ id, time, icon, text }) => (
    <View style={[time === "Now" ? styles.componentNow : styles.component]}>
        <Text style={[time === "Now" ? styles.componentTitleTextNow : styles.componentTitleText]}>{time}</Text>
        <Image
            style={styles.imageView}
            source={{uri:`http://openweathermap.org/img/wn/${icon}@2x.png`}}
        />
        <Text style={[time === "Now" ? styles.componentBottomTextNow : styles.componentBottomText]}>{text}</Text>
    </View>
))

const ForcastSection = observer(() => {

    function getTime(date:Date):string{
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    const renderItem = ({ item }) => (
        <Item id={`${item.time.getTime()}`} time={getTime(item.time)} icon={item.weather.icon} text={item.temperature} />
    );

    return (
        <>
            {
                store.isEmpty ? (
                    <Spinner color='white' />
                ) : (
                        <FlatList
                            horizontal={true}
                            data={store.listCity[0].hourlyData.slice().filter((item,i)=>i<5)}
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
    container: {
        flexDirection: "row",
        height: "100%"
    },
    component: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "45%",
        paddingRight: 20,
        paddingLeft: 20,
        // backgroundColor: "#fff",
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
        height: "45%",
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
        paddingBottom: 10,
    },
    componentTitleTextNow: {
        fontSize: 15,
        paddingBottom: 10,
    },
    componentIcon: {
        paddingBottom: 10,
    },
    componentBottomText: {
        color: "#fff",
        fontSize: 15,
        paddingBottom: 10,
    },
    componentBottomTextNow: {
        fontSize: 15,
        paddingBottom: 10,
    },
    imageView:{
        width:50,
        height:40
    }
})
