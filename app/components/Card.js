import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import colors from '../config/colors'
import AppText from './AppText'

const Card = ({ title, subTitle, image }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	image: PropTypes.number.isRequired,
}

export default Card

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		borderRadius: 15,
		marginBottom: 20,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	detailsContainer: {
		padding: 20,
	},

	title: {
		marginBottom: 7,
	},

	subTitle: {
		fontWeight: 'bold',
		color: colors.secondary,
	},
})
