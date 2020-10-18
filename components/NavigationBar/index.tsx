import { NavigationContainerRef } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { Button } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dialog } from 'react-native-simple-dialogs';
import { useDimensions } from '@react-native-community/hooks';
import FlatlistItem from './FlatlistItem';
import DialogBox from './DiallogBox';
import useGetCities from '../../hooks/useGetCities';
import { CityMapValue } from '../../utils/typeDef';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
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
});

const Navigation = observer((prop: { navigation: NavigationContainerRef }) => {
    const { width } = useDimensions().window;
    const [dialogVisible, setDialogVisible] = useState(false);

    const goToMainScreen = () => {
        prop.navigation.navigate('Home');
    };

    const renderItem = (data: { item: CityMapValue; index: number }) => (
        <FlatlistItem
            goToMainScreen={goToMainScreen}
            cityName={data.item.cityName ? data.item.cityName : 'undefined'}
            icon={data.item.icon ? data.item.icon : ''}
        />
    );

    return (
        <SafeAreaView style={[styles.container]}>
            <FlatList
                style={[{ width }, styles.flatList]}
                data={useGetCities()}
                renderItem={renderItem}
                keyExtractor={(item: CityMapValue) => item.cityName}
            />
            <View style={styles.inputView}>
                <Button
                    block
                    style={{ backgroundColor: '#b6c5fb' }}
                    onPress={() => {
                        // DATA.push({ cityName: "adasdasdasd", icon: "10d", id: "asdfsadfs" })
                        setDialogVisible(true);
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        Add city
                    </Text>
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
    );
});

export default Navigation;
