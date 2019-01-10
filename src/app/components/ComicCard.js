import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'
import { Card, CardItem, Body, Text } from 'native-base'

const CardStyled = styled(Card)`
  margin-top: 8;
`

const ComicCard = ({ comic: { title, date, excerpt, image_url } }) => (
  <CardStyled>
    <CardItem header>
      <Body>
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        <Text note>{date}</Text>
      </Body>
    </CardItem>
    <CardItem cardBody>
      <Image source={{ uri: image_url }} style={{ height: 200, width: null, flex: 1 }} />
    </CardItem>
    <CardItem>
      <Body>
        <Text numberOfLines={3}>{excerpt}</Text>
      </Body>
    </CardItem>
  </CardStyled>
)

export default ComicCard
