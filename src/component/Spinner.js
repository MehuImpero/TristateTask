import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import SpinnerKit from 'react-native-spinkit';
import colors from '../config/colors';


const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			{/* <ActivityIndicator  animating={true} size={size || 'large'} /> */}

			<SpinnerKit  size={50} type={'Circle'} color={colors.white}/>

		</View>
	);
};

const styles = {
 spinnerStyle: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
 }
};

export default Spinner ;