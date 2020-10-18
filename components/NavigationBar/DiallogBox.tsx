import { Button, Spinner } from 'native-base';
import React, { useCallback, useState } from 'react';
import { Input } from 'react-native-elements';
import { Text, View } from 'react-native';
import Toast from 'react-native-root-toast';
import useValidateCityName from '../../hooks/useValidateCityName';
import useAddCity from '../../hooks/useAddCity';

const DialogBox = (prop: { setDialogVisible: Function }) => {
    const { setDialogVisible } = prop;
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const [fetching, result, error, executeQuery] = useValidateCityName(city);

    const onButtonPress = useCallback(() => {
        setLoading(true);
        executeQuery();
    }, [executeQuery]);

    if (loading && !fetching) {
        if (result) {
            const icon: string = result?.current?.icon ?? result?.current?.icon;
            useAddCity(icon, city);
        } else {
            Toast.show('Have you splelled city correctly ?', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
            console.log('error....');
            console.log(error);
        }
        setLoading(false);
        setDialogVisible(false);
    }

    return (
        <View>
            {loading ? (
                <Spinner color="black" />
            ) : (
                <>
                    <Input
                        placeholder="eg: kodinar"
                        onChangeText={(text) => setCity(text)}
                    >
                        {city}
                    </Input>
                    <Button
                        block
                        style={{ backgroundColor: '#b6c5fb' }}
                        onPress={() => {
                            onButtonPress();
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
                </>
            )}
        </View>
    );
};

export default DialogBox;
