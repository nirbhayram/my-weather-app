import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Icon } from "react-native-elements";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        icon: 'cloud-showers-heavy',
        date: 'Mon, 31 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da-471f-bd96-145571e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da1-471f-bqwed96-145571e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-112345571e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571231e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da1-471f-bd12396-14551231271e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14551231231271e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58694a1320f-3da1-471f-bd96-14551231271e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
    {
        id: '58612394a0f-3da1-471f-bd96-14551231271e29d72',
        title: 'Third Item',
        icon: 'cloud-showers-heavy',
        date: 'Sun, 30 Aug',
        maxTemperature: '27°',
        minTemperature: '20°'
    },
];

const Item = (data) => (
    <View style={styles.titleContainer}>
        <View style={styles.titleContainerDate}>
            <Icon
                name={data.icon}
                type='font-awesome-5'
                color='#4064e0'
                size={23}
                onPress={() => console.log('hello')} />
            <Text style={{ fontSize: 13, paddingLeft: "5%", fontWeight: "bold", color: "#5C5C5C" }}>{data.date}</Text>
        </View>
        <View style={styles.titleContainerTemprature}>
            <Text style={{ fontSize: 17, paddingRight: "5%", fontWeight: "bold", color: "#5C5C5C" }}>{data.maxTemperature}</Text>
            <Text style={{ paddingRight: "5%" }}>{data.minTemperature}</Text>
        </View>
    </View>
);

const BottomSectionFlatList = () => {

    const renderItem = ({ item }) => (
        <Item
            icon={item.icon}
            date={item.date}
            maxTemperature={item.maxTemperature}
            minTemperature={item.minTemperature} />
    );


    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default BottomSectionFlatList

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 15,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "2%",
        paddingBottom: "2%"
    },
    titleContainerDate: {
        padding: "2%",
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
