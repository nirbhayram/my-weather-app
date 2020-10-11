import {Spinner} from 'native-base';
import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {getDate} from '../../utils/utilities';
import FlatlistItem from './FlatlistItem';
import useGetCity from "../../hooks/useGetCity";
import {ICON_COLOR} from "../../utils/stylesConstants";

const BottomSectionFlatList = () => {

    const city = useGetCity()

    const renderItem = (data: { item: { date: number, icon: string, minTemperature: number, maxTemperature: number } }) => (
        <FlatlistItem
            icon={data.item.icon}
            date={getDate(new Date(data.item.date * 1000))}
            maxTemperature={data.item.maxTemperature}
            minTemperature={data.item.minTemperature}/>
    );


    return (
        <View style={styles.container}>
            {
                city ? (
                        <FlatList
                            data={city.dailyData}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.date}`}
                        />
                    )
                    :
                    (
                        <Spinner color={ICON_COLOR}/>
                    )
            }
        </View>
    )
}

export default BottomSectionFlatList

const styles = StyleSheet.create({
    container: {
        flexBasis: 'auto',
        flexShrink: 1,
        justifyContent: 'center',
        flexDirection: "column",
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 15,
        marginBottom: 10
    },
})
