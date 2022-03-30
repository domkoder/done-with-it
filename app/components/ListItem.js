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
	iconComponent,
	onPress,
	renderRightActions,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{iconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{description && (
							<AppText style={styles.description}>{description}</AppText>
						)}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	)
}

ListItem.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.number,
	onPress: PropTypes.func,
	renderRightActions: PropTypes.func,
	iconComponent: PropTypes.object,
}

export default ListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 35,
	},
	detailContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
	title: {
		fontWeight: '500',
	},
	description: {
		color: colors.medium,
	},
})
