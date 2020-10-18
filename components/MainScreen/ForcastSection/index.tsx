import { Spinner } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { getTime } from '../../../utils/utilities';
import FlatlistItem from './FlatlistItem';
import { City } from '../../../utils/typeDef';
import useGetCity from '../../../hooks/useGetCity';

const ForcastSection = () => {
    const city: City | undefined = useGetCity();

    const renderItem = (data: {
        item: { time: number; icon: string; temperature: number };
    }) => (
        <FlatlistItem
            time={getTime(new Date(data.item.time * 1000))}
            icon={data.item.icon}
            text={data.item.temperature}
        />
    );

    return (
        <>
            {city ? (
                <FlatList
                    horizontal
                    data={city.hourData}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.time}`}
                />
            ) : (
                <Spinner color="white" />
            )}
        </>
    );
};

export default ForcastSection;
