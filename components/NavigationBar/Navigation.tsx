import { NavigationContainerRef } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { observer } from 'mobx-react';
import { Button, Spinner } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Input } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dialog } from 'react-native-simple-dialogs';
import store, { CityStoreObject } from '../../store/mobx/NewCityStore';

const Navigation = observer((prop: { navigation: NavigationContainerRef }) => {

    const [dialogVisible, setDialogVisible] = useState(false);

    const [loading, setLoading] = useState(false);

    const goToMainScreen = () => {
        prop.navigation.navigate('Home');
    }

    const Item = (data: { cityName: string, icon: string }) => (

        <TouchableOpacity onPress={() => {
            if (store.setCurrentCityName(data.cityName)) {
                goToMainScreen();
            }
        }}>
            <View style={styles.flatListView}>
                <LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.flatListItemView}>
                    <Text style={styles.flatListTextView}>{data.cityName}</Text>
                    <Image
                        style={styles.flatListImageView}
                        source={{ uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png` }}
                    />
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );

    const DialogBox = () => {

        const [city, setCity] = useState('')

        return (
            <View>
                {
                    loading ? (
                        <Spinner color='black' />
                    ) : (
                            <>
                                <Input placeholder='eg: kodinar'
                                    onChangeText={(text) => setCity(text)}
                                >
                                    {city}
                                </Input>
                                <Button block style={{ backgroundColor: "#b6c5fb" }} onPress={() => {
                                    setLoading(true)
                                    store.setCity(city).then((cityName: string) => {
                                        Toast.show('City updated', {
                                            duration: Toast.durations.SHORT,
                                            position: Toast.positions.CENTER,
                                            shadow: true,
                                            animation: true,
                                            hideOnPress: true,
                                            delay: 0
                                        });
                                        console.log(`Inside Navigation | inside DialogBox | value of city name received ${cityName}`)
                                        setLoading(false);
                                        setDialogVisible(false);
                                    }).catch((error) => {
                                        Toast.show('Have you splelled city correctly ?', {
                                            duration: Toast.durations.SHORT,
                                            position: Toast.positions.CENTER,
                                            shadow: true,
                                            animation: true,
                                            hideOnPress: true,
                                            delay: 0
                                        });
                                        console.log(`Inside Navigation | inside DialogBox | caught an exception ${error}`)
                                        setLoading(false);
                                        setDialogVisible(false);
                                    })
                                }}>
                                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Add city</Text>
                                </Button>
                            </>
                        )
                }

            </View >
        )
    }

    const renderItem = (data: { item: CityStoreObject, index: number }) => (
        <Item cityName={data.item.city?.name ? data.item.city?.name : ''} icon={data.item.city?.weather.icon ? data.item.city?.weather.icon : ''} />
    );

    return (
        <SafeAreaView style={[styles.container]}>
            <FlatList
                style={[{ width: Dimensions.get('screen').width }, styles.flatList]}
                data={Array.from(store.cities.values())}
                renderItem={renderItem}
                keyExtractor={(item: CityStoreObject) => item.cityName}
            />
            <View style={styles.inputView}>
                <Button block style={{ backgroundColor: "#b6c5fb" }} onPress={() => {
                    // DATA.push({ cityName: "adasdasdasd", icon: "10d", id: "asdfsadfs" })
                    setDialogVisible(true)
                }}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Add city</Text>
                </Button>
            </View>
            <Dialog
                visible={dialogVisible}
                title="Which city are you looking for?"
                onTouchOutside={() => setDialogVisible(false)}
                animationType="fade"
            >
                <DialogBox />
            </Dialog>
        </SafeAreaView>
    )
}
)

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
        margin: 10,
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
