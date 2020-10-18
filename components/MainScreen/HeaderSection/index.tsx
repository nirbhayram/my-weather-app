import React from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDimensions } from '@react-native-community/hooks';

const styles = StyleSheet.create({
    navigationControl: {
        flex: 0.3,
        flexBasis: 'auto',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
});

const HeaderSection = (prop: {
    navigateToNavigationScreen: (event: GestureResponderEvent) => void;
}) => {
    const { width } = useDimensions().window;
    const { navigateToNavigationScreen } = prop;
    return (
        <View style={[styles.navigationControl, { width }]}>
            <Icon
                name="navicon"
                type="font-awesome"
                color="#fff"
                onPress={navigateToNavigationScreen}
                size={25}
            />
            <Icon name="bell-o" type="font-awesome" color="#fff" size={25} />
        </View>
    );
};

export default HeaderSection;
