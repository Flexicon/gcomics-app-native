import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Body, Text } from 'native-base'

const textLimit = 140

const ComicCard = ({ comic: { title, excerpt, image_url } }) => (
  <Card>
    <CardItem header>
      <Text>{title}</Text>
    </CardItem>
    <CardItem cardBody>
      <Image source={{ uri: image_url }} style={{ height: 200, width: null, flex: 1 }} />
    </CardItem>
    <CardItem>
      <Body>
        <Text>
          {excerpt.length > textLimit ? `${excerpt.substring(0, textLimit).trim()}...` : excerpt}
        </Text>
      </Body>
    </CardItem>
  </Card>
)

export default ComicCard
