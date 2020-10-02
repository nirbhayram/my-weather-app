import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { LinearGradient } from "expo-linear-gradient";
import BottomSection from './components/BottomSheet/BottomSection';
import MainScreen from './components/MainScreen';

const Main = ({navigation}) => {

	const renderContent = () => (
		<>
		{/* <BottomSection /> */}
		</>
	);

	const navigateToNavigationScreen = ()=>{
		navigation.navigate('Navigation');
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