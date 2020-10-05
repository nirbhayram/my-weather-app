import {observer} from 'mobx-react';
import {Spinner} from 'native-base';
import React from 'react'
import {FlatList} from 'react-native'
import store from "../../store/mobx/CityStore";
import {getTime} from '../../utils/Utilities';
import FlatlistItem from './FlatlistItem';

const ForcastSection = observer(() => {

    const fetching = store.fetching
    const city = store.city

    const renderItem = (data: { item: { time: number, icon: string, temperature: number } }) => (
        <FlatlistItem time={getTime(new Date(data.item.time * 1000))} icon={data.item.icon} text={data.item.temperature} />
    );

    return (
        <>
            {
                fetching ? (
                    <Spinner color='white' />
                ) : (
                        <FlatList
                            horizontal={true}
                            data={city.hourData}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.time}`}
                        />
                    )
            }
        </>
    )
})

export default ForcastSection
