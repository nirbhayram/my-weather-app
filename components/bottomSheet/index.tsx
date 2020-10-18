import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSectionFlatList from './FlatList';
import BottomSectionHeroSection from './HeroSection';
import BottomSectionTitle from './Title';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#f0f3f5',
        paddingHorizontal: 20,
        height: '100%',
    },
});
const BottomSection: React.FC = (): ReactElement => (
    <View style={[styles.container]}>
        <BottomSectionTitle />
        <BottomSectionHeroSection />
        <BottomSectionFlatList />
    </View>
);

export default BottomSection;
