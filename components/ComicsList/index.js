import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ComicCard from '../ComicCard'

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
})

const ComicsList = ({ comics }) => (
  <FlatList
    style={styles.list}
    data={comics}
    renderItem={({ item }) => <ComicCard comic={item} />}
    keyExtractor={({ id }) => `${id}`}
  />
)

export default ComicsList
