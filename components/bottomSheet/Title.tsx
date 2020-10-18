import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ICON_COLOR, ICON_SIZE } from '../../utils/stylesConstants';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: 'auto',
        marginBottom: 20,
    },
    titleBarIcon: {
        borderBottomColor: ICON_COLOR,
        borderBottomWidth: 4,
        paddingTop: 10,
        marginBottom: 20,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: ICON_COLOR,
        paddingBottom: 20,
    },
});

const BottomSectionTitle = () => {
    const title: string = 'Next 7 days';
    const iconName: string = 'ellipsis-h';
    const iconType: string = 'font-awesome-5';

    return (
        <View style={styles.container}>
            <View style={styles.titleBarIcon} />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Icon
                    name={iconName}
                    type={iconType}
                    color={ICON_COLOR}
                    size={ICON_SIZE}
                />
            </View>
        </View>
    );
};

export default BottomSectionTitle;
