import { Button, Spinner } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react'
import { Input } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-root-toast';
import store from '../../store/mobx/CityStore';
import { useQuery, UseQueryState } from 'urql';
import gql from 'graphql-tag'
import { checkCity } from '../hooks/useGraphql';



const DialogBox = (prop: { setDialogVisible: Function }) => {
    const { setDialogVisible } = prop;
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)

    const [result, executeQuery] = checkCity(city);

    const onButtonPress = useCallback(() => {
        setLoading(true);
        executeQuery();
    }, [executeQuery]);

    const { data, fetching, error } = result;

    if (loading && fetching == false) {
        // console.log(result)
        if (result.data?.getCityByName?.name) {
            const key: string = data?.getCityByName?.name ? result.data?.getCityByName?.name : '';
            const icon: string = data?.getCityByName?.current?.icon ? data?.getCityByName?.current?.icon : ''
            console.log(`key : ${key} icon : ${icon} name: ${city}`)
            store.addCity(key, icon, city);
        } else {
            Toast.show('Have you splelled city correctly ?', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0
            });
            console.log('error....');
            console.log(error);
        }
        setLoading(false);
        setDialogVisible(false);
    }


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
                                onButtonPress();
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
