import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import colors from '../config/colors'

const AppButton = ({ title, color = 'primary' }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

AppButton.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

export default AppButton

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		marginVertical: 10,
		width: '100%',
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
})
