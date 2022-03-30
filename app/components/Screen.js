import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import Constants from 'expo-constants'

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.screen, style]}>
			<View style={style}>{children}</View>
		</SafeAreaView>
	)
}

Screen.propTypes = {
	children: PropTypes.object.isRequired,
	style: PropTypes.object,
}

export default Screen

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
})
