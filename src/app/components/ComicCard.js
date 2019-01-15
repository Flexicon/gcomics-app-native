import React from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Card, CardItem, Body, Text } from 'native-base'

const CardStyled = styled(Card)`
  margin-top: 8;
`

const ComicImage = styled(Image)`
  height: 200;
  flex: 1;
  border-color: #aaa;
  border-width: 1;
`

const ComicCard = ({ comic: { title, date, image_url } }) => (
  <CardStyled>
    <CardItem header>
      <Body>
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        <Text note>{date}</Text>
      </Body>
    </CardItem>
    <CardItem cardBody>
      <ComicImage source={{ uri: image_url }} />
    </CardItem>
  </CardStyled>
)

export default ComicCard
