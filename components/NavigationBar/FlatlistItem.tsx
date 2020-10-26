import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import {
 Image, StyleSheet, Text, View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import { useSetCityName } from '../../hooks/useSetCityName';
import {
    PRIMARY_DARK_COLOR,
    PRIMARY_LIGHT_COLOR,
} from '../../utils/stylesConstants';

const styles = StyleSheet.create({
    flatListView: {
        margin: 5,
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    flatListItemView: {
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        margin: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flatListTextView: {
        padding: 30,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    flatListImageView: {
        padding: 30,
        width: 60,
        height: 60,
    },
});

const FlatlistItem = (data: {
    cityName: string;
    icon: string;
    goToMainScreen: Function;
}) => {
    const linearGradientProps = useMemo(
        () => ({
            colors: [PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR],
            style: styles.flatListItemView,
        }),
        [],
    );

    return (
        <TouchableOpacity
            onPress={() => {
                const flag: boolean = useSetCityName(data.cityName);
                if (flag) {
                    data.goToMainScreen();
                } else {
                    Toast.show('Something went wrong :(', {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.CENTER,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                    });
                }
            }}
        >
            <View style={styles.flatListView}>
                <LinearGradient {...linearGradientProps}>
                    <Text style={styles.flatListTextView}>{data.cityName}</Text>
                    <Image
                        style={styles.flatListImageView}
                        source={{
                            uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png`,
                        }}
                    />
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
};

export default FlatlistItem;
