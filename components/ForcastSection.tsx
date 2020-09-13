import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Icon } from "react-native-elements";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 'Now',
        icon: 'cloud-sun-rain',
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

const Item = ({ id, time, icon, text }) => (
    <View style={[time==="Now"?styles.componentNow:styles.component]}>
        <Text style={styles.componentTitleText}>{time}</Text>
        <Icon
            style={styles.componentIcon}
            name={icon}
            type='font-awesome-5'
            color={time==="Now"?'#ccc':'#f0f3f5'}
            size={30}/>
        <Text style={styles.componentBottomText}>{text}</Text>
    </View>
);

const ForcastSection = () => {

    const renderItem = ({ item }) => (
        <Item id={item.id} time={item.time} icon={item.icon} text={item.text} />
    );

    return (
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

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
        fontSize: 15,
        paddingBottom: 10,
    },
    componentIcon: {
        paddingBottom: 10,
    },
    componentBottomText: {
        fontSize: 15,
        paddingBottom: 10,
    }
})
