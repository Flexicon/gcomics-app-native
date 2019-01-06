import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ComicCard from './ComicCard'

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
})

const renderItem = ({ item }) => <ComicCard comic={item} />
const keyExtractor = ({ id }) => `${id}`

const ComicsList = ({ comics }) => (
  <FlatList style={styles.list} data={comics} renderItem={renderItem} keyExtractor={keyExtractor} />
)

export default ComicsList
