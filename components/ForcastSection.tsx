import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Icon } from "react-native-elements";

const ForcastSection = () => {
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
            id: '58694a0f3da1-471f-bd96-14551e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-b96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14551e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e2972',
            title: 'Third Item',
        },
        {
            id: '58694a0-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14571e29d72',
            title: 'Third Item',
        },
        {
            id: '5869a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        }
    ];

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const Item = ({ title }) => (
        <View style={styles.component}>
            <Text style={styles.componentTitleText}>Now</Text>
            <Icon
                style={styles.componentIcon}
                name='cloud-sun-rain'
                type='font-awesome-5'
                color='#ccc'
                size={30}
                onPress={() => console.log('hello')} />
            <Text style={styles.componentBottomText}>27°</Text>
        </View>
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
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth:1,
        borderColor:"#EBEBEB",
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
