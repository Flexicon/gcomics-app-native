import React from 'react'
import styled from 'styled-components/native'

import ComicCard from './ComicCard'

const StyledFlatList = styled.FlatList`
  padding-horizontal: 5;
`

const renderItem = ({ item }) => <ComicCard comic={item} />
const keyExtractor = ({ id }) => `${id}`

const ComicsList = ({ comics }) => (
  <StyledFlatList data={comics} renderItem={renderItem} keyExtractor={keyExtractor} />
)

export default ComicsList
