import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import PropTypes from 'prop-types'

const Icon = ({
	name,
	size = 40,
	backgroundColor = 'primary',
	iconColor = 'white',
}) => {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor: colors[backgroundColor],
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<MaterialCommunityIcons
				name={name}
				color={colors[iconColor]}
				size={size / 2}
			/>
		</View>
	)
}

Icon.propTypes = {
	name: PropTypes.string,
	size: PropTypes.number,
	backgroundColor: PropTypes.string,
	iconColor: PropTypes.string,
}

export default Icon
