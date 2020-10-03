import { NavigationContainerRef } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { Button} from 'native-base';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dialog } from 'react-native-simple-dialogs';
import store, { CityStoreObject } from '../../store/mobx/CityStore';
import { useGraphql } from '../hooks/useGraphql';
import NavigationItem from './NavigationItem';
import DialogBox from "./DiallogBox";

const Navigation = observer((prop: { navigation: NavigationContainerRef }) => {

    const [dialogVisible, setDialogVisible] = useState(false);

    const goToMainScreen = () => {
        prop.navigation.navigate('Home');
    }

    const renderItem = (data: { item: CityStoreObject, index: number }) => (
        <NavigationItem goToMainScreen={goToMainScreen} cityName={data.item.city?.name ? data.item.city?.name : ''} icon={data.item.city?.weather.icon ? data.item.city?.weather.icon : ''} />
    );

    // const [res, executeQraphql] = useGraphql('kodinar');

    // if (res.fetching) console.log('stil fetching')
    // else console.log(`repsonse: ${JSON.stringify(res)}`)
    // if (res.error) console.log(`repsonse: ${JSON.stringify(res)}`)

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
                <DialogBox setDialogVisible={setDialogVisible} />
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
    }
})
