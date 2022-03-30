import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: 'primary',
		},
	},

	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: 'secondary',
		},
	},
]

const MyAccountScreen = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					image={require('../assets/mosh.jpg')}
					title="Mosh Hamedani"
					description="programingwithmosh@gmail.com"
				></ListItem>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							iconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>

			<ListItem
				title="Log Out"
				iconComponent={<Icon name="logout" backgroundColor="yellow" />}
			/>
		</Screen>
	)
}

export default MyAccountScreen

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},

	info: {
		backgroundColor: colors.white,
		marginBottom: 40,
	},

	logout: {
		marginTop: 20,
	},
})
