import { Button, Spinner } from 'native-base';
import React, { useState } from 'react'
import { Input } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-root-toast';
import store from '../../store/mobx/CityStore';

const DialogBox = (prop: { setDialogVisible: Function }) => {
    const { setDialogVisible } = prop;
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)

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
                                setLoading(true);
                                store.setCity(city).then((cityName: string) => {
                                    Toast.show('City updated', {
                                        duration: Toast.durations.SHORT,
                                        position: Toast.positions.CENTER,
                                        shadow: true,
                                        animation: true,
                                        hideOnPress: true,
                                        delay: 0
                                    });
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

export default DialogBox

const styles = StyleSheet.create({})
