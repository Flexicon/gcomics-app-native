import React from 'react'
import styled from 'styled-components/native'
import { Image, ScrollView } from 'react-native'
import { Text, Card, CardItem } from 'native-base'

import ContainerWithBg from './ContainerWithBg'

const ComicDetails = ({ comic: { title, image_url, excerpt } }) => (
  <ContainerWithBg>
    <ScrollView>
      <Card>
        <CardItem header>
          <Text>{title}</Text>
        </CardItem>
        <CardItem cardBody>
          <ComicImage source={{ uri: image_url }} />
        </CardItem>
        <CardItem>
          <Text>{excerpt}</Text>
        </CardItem>
      </Card>
    </ScrollView>
  </ContainerWithBg>
)

export default ComicDetails

const ComicImage = styled(Image)`
  height: 600;
  flex: 1;
  border-color: #aaa;
  border-width: 1;
`
