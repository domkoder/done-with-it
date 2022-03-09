import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

import PropTypes from 'prop-types'
import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({ title, description, image }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.description}>{description}</AppText>
			</View>
		</View>
	)
}

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.number.isRequired,
}

export default ListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 35,
		marginRight: 10,
	},
	detailContainer: {},
	title: {
		fontWeight: '500',
	},
	description: {
		color: colors.medium,
	},
})
