import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

import colors from '../config/colors'

const WelcomeScreen = () => {
	return (
		<ImageBackground
			style={styles.background}
			blurRadius={10}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />
				<Text style={styles.tagline}>sell what you don want</Text>
			</View>

			<View style={styles.buttonContainer}>
				<AppButton style={styles.loginButton} title="login" />
				<AppButton
					style={styles.registerButton}
					color="secondary"
					title="register"
				/>
			</View>
		</ImageBackground>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	logoContainer: {
		position: 'absolute',
		top: 100,
		alignItems: 'center',
	},

	logo: {
		height: 100,
		width: 100,
	},

	tagline: {
		fontSize: 25,
		fontWeight: '600',
		marginTop: 20,
	},

	buttonContainer: {
		width: '100%',
		padding: 20,
	},
})
