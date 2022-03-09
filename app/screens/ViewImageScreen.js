import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cancelIcon}>
				<MaterialCommunityIcons name="close" size={35} color={colors.white} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					size={35}
					color={colors.white}
				/>
			</View>

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

	cancelIcon: {
		position: 'absolute',
		top: 50,
		left: 30,
	},

	deleteIcon: {
		position: 'absolute',
		top: 50,
		right: 30,
	},

	image: {
		width: '100%',
		height: '100%',
	},
})
export default ViewImageScreen
