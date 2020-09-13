import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Icon } from "react-native-elements";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bqwed96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-112345571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571231e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14551231271e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.titleContainer}>
        <View style={styles.titleContainerDate}>
            <Icon
                name='cloud-showers-heavy'
                type='font-awesome-5'
                color='#4064e0'
                size={23}
                onPress={() => console.log('hello')} />
            <Text style={{ fontSize: 13, paddingLeft: "5%", fontWeight: "bold", color: "#5C5C5C" }}>
                Sun, 30 Aug
                    </Text>
        </View>
        <View style={styles.titleContainerTemprature}>
            <Text style={{ fontSize: 17, paddingRight: "5%", fontWeight: "bold", color: "#5C5C5C" }}>
                27°
                    </Text>
            <Text style={{ paddingRight: "5%" }}>
                27°
                    </Text>
        </View>
    </View>
);

const BottomSectionFlatList = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
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
        backgroundColor: "#fff",
        borderRadius: 15,
        // backgroundColor: "#000",
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
