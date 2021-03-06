import * as React from 'react';
import { useCallback, useMemo } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainerRef } from '@react-navigation/native';
import BottomSection from './BottomSheet';
import MainScreen from './MainScreen';
import useFetchCity from '../hooks/useFetchCity';
import {
    NAVIAGTION_SCREEN,
    PRIMARY_DARK_COLOR,
    PRIMARY_LIGHT_COLOR,
} from '../utils/stylesConstants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
});

const Main = (prop: { navigation: NavigationContainerRef }) => {
    const { navigation } = prop;

    useFetchCity();

    const renderContent = () => (
        <>
            <BottomSection />
        </>
    );

    const navigateToNavigationScreen = useCallback(() => {
        navigation.navigate(NAVIAGTION_SCREEN);
    }, [navigation]);

    const sheetRef = React.useRef(null);

    const linearGradientProps = useMemo(
        () => ({
            colors: [PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR],
            style: styles.container,
        }),
        [],
    );

    return (
        <>
            <LinearGradient {...linearGradientProps}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.container}>
                    <MainScreen
                        navigateToNavigationScreen={navigateToNavigationScreen}
                    />
                </SafeAreaView>
            </LinearGradient>
            <BottomSheet
                initialSnap={2}
                ref={sheetRef}
                snapPoints={['75%', '12%', '12%']}
                borderRadius={20}
                renderContent={renderContent}
            />
        </>
    );
};

export default Main;
