import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Input } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'

const DATA = [
    {
        cityName: 'kodinar',
        icon: '10d',
        id: 'sdasdasdasd'
    },
    {
        cityName: 'Pune',
        icon: '10d',
        id: 'bvdkavbksdv'
    },
    {
        cityName: 'Ahmedabad',
        icon: '10d',
        id: 'aksfbdkfbakfbk'
    },
];

const Item = (data: Object) => (
    <View style={styles.flatListView}>
        <LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.flatListItemView}>
            <Text style={styles.flatListTextView}>{data.cityName}</Text>
            <Image
                style={styles.flatListImageView}
                source={{ uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png` }}
            />
        </LinearGradient>
    </View>
);

const Navigation = () => {

    const renderItem = ({ item }) => (
        <Item cityName={item.cityName} icon={item.icon} />
    );

    return (
        <SafeAreaView style={[styles.container]}>
            <FlatList
                style={[{ width: Dimensions.get('screen').width }, styles.flatList]}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.inputView}>
                <Button block style={{backgroundColor:"#b6c5fb"}} onPress={()=>{
                    DATA.push({cityName:"adasdasdasd",icon:"10d",id:"asdfsadfs"})
                }}>
                    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>Add city</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Navigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10
    },
    flatList: {
        flex: 1,
        flexShrink: 1,
    },
    inputView: {
        margin:10,
        alignSelf: 'stretch',
        flexBasis: 'auto',
    },
    flatListView: {
        margin: 5,
        alignSelf: 'stretch',
        borderRadius: 10
    },
    flatListItemView: {
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        margin: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flatListTextView: {
        padding: 30,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    flatListImageView: {
        padding: 30,
        width: 60,
        height: 60
    }
})
