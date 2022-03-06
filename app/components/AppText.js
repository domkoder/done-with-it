import { Platform, StyleSheet, Text } from 'react-native'
import React from 'react'

const AppText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>
}

export default AppText

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
})
