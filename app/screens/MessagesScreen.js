import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'

const messages = [
	{
		id: 1,
		title: 'Title One',
		description: 'this is message one',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'Title Two',
		description: 'this is message two',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 3,
		title: 'Title Three',
		description: 'this is message three',
		image: require('../assets/mosh.jpg'),
	},
]

const MessagesScreen = () => {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				)}
				ItemSeparatorComponent={() => (
					<View
						style={{ width: '100%', height: 1, backgroundColor: '#333' }}
					></View>
				)}
			/>
		</Screen>
	)
}

export default MessagesScreen

const styles = StyleSheet.create({})
