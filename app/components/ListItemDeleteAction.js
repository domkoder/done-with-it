import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import colors from '../config/colors'

const ListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					color={colors.white}
					size={35}
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}

ListItemDeleteAction.propTypes = {
	onPress: PropTypes.func.isRequired,
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
