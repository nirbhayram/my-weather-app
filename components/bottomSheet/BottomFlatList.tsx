import {observer} from 'mobx-react';
import {Spinner} from 'native-base';
import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import store from '../../store/mobx/CityStore';
import {getDate} from '../../utils/Utilities';
import FlatlistItem from './FlatlistItem';

const BottomSectionFlatList = observer(() => {

    const fetching = store.fetching
    const city = store.city

    const renderItem = (data: { item: { date: number, icon: string, minTemperature: number, maxTemperature: number } }) => (
        <FlatlistItem
            icon={data.item.icon}
            date={getDate(new Date(data.item.date * 1000))}
            maxTemperature={data.item.maxTemperature}
            minTemperature={data.item.minTemperature} />
    );


    return (
        <View style={styles.container}>
            {
                fetching ? (
                    <Spinner color='#5c5c5c' />
                )
                    :
                    (
                        <FlatList
                            data={city.dailyData}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.date}`}
                        />
                    )
            }
        </View>
    )
})

export default BottomSectionFlatList

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 15,
        marginBottom: 10
    },
})
