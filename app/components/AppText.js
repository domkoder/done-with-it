import { Platform, StyleSheet, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const AppText = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>
}

AppText.propTypes = {
	children: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired,
}

export default AppText

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
})
