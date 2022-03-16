import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import Constants from 'expo-constants'

const Screen = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

Screen.propTypes = {
	children: PropTypes.object.isRequired,
}

export default Screen

const styles = StyleSheet.create({
	screen: {
		marginTop: Constants.statusBarHeight,
		flex: 1,
	},
})
