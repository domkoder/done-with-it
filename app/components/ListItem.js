import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import PropTypes from 'prop-types'
import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({
	title,
	description,
	image,
	onPress,
	renderRightActions,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					<Image style={styles.image} source={image} />
					<View style={styles.detailContainer}>
						<AppText style={styles.title}>{title}</AppText>
						<AppText style={styles.description}>{description}</AppText>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	)
}

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired,
	renderRightActions: PropTypes.func.isRequired,
}

export default ListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
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
