import * as React from 'react';
import {useCallback} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {LinearGradient} from "expo-linear-gradient";
import BottomSection from './BottomSheet';
import MainScreen from './MainScreen';
import {NavigationContainerRef} from '@react-navigation/native';
import useFetchCity from "../hooks/useFetchCity";
import {PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR} from "../utils/stylesConstants";

const Main = (prop: { navigation: NavigationContainerRef }) => {
    const {navigation} = prop;

    useFetchCity()

    const renderContent = () => (
        <>
            <BottomSection/>
        </>
    );

    const navigateToNavigationScreen = useCallback(() => {
            navigation.navigate('Navigation');
        }, [navigation]
    )

    const sheetRef = React.useRef(null);

    return (
        <>
            <LinearGradient colors={[PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR]} style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <SafeAreaView style={styles.container}>
                    <MainScreen navigateToNavigationScreen={navigateToNavigationScreen}/>
                </SafeAreaView>
            </LinearGradient>
            <BottomSheet
                initialSnap={2}
                ref={sheetRef}
                snapPoints={[`75%`, `12%`, `12%`]}
                borderRadius={20}
                renderContent={renderContent}
            />
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
    }
});

export default Main;
