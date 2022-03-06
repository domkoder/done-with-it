import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.deleteIcon}></View>
			<View style={styles.cancelIcon}></View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require('../assets/chair.jpg')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},

	deleteIcon: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: colors.primary,
		position: 'absolute',
		top: 40,
		left: 30,
	},

	cancelIcon: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: colors.secondary,
		position: 'absolute',
		top: 40,
		right: 30,
	},

	image: {
		width: '100%',
		height: '100%',
	},
})
export default ViewImageScreen
