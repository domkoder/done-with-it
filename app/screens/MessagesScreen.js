import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
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
	const [messages, setMessages] = React.useState(initialMessages)
	const [refreshing, setRefreshing] = React.useState(false)

	const handelDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id))
	}
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
						onPress={() => console.log('nothing')}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handelDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages(initialMessages)
				}}
			/>
		</Screen>
	)
}

export default MessagesScreen

const styles = StyleSheet.create({})
