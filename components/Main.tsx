import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { LinearGradient } from "expo-linear-gradient";
import BottomSection from './BottomSheet/BottomSection';
import MainScreen from './MainScreen/MainScreen';
import { NavigationContainerRef } from '@react-navigation/native';
import { getCityDetails } from "./hooks/useGraphql";
import store from '../store/mobx/CityStore';

const Main = (prop:{ navigation:NavigationContainerRef }) => {

	const [response,executeQuery] = getCityDetails(store.currentCityName)
	
	store.response = response;

	const renderContent = () => (
		<>
			<BottomSection />
		</>
	);

	const navigateToNavigationScreen = () => {
		prop.navigation.navigate('Navigation');
	}

	const sheetRef = React.useRef(null);

	return (
		<>
			<LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.container}>
				<StatusBar
					barStyle="light-content"
				/>
				<SafeAreaView style={styles.container}>
					<MainScreen navigateToNavigationScreen={navigateToNavigationScreen} />
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