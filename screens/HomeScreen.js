import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Button,
  Content,
  Text,
  Icon,
  Title,
  Spinner,
} from 'native-base'

import ComicsList from '../components/ComicsList'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    paddingTop: 30,
  },
})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)

    this.state = { comics: null, hasError: null, fetching: true }
    this.refetchData = this.refetchData.bind(this)
  }

  componentDidMount() {
    this.refetchData()
  }

  async refetchData() {
    this.setState({ comics: null, fetching: true })
    try {
      const response = await fetch('http://gcomics.nerfthis.xyz/api/v1/comics')
      const { data } = await response.json()

      this.setState({ comics: data, fetching: false })
    } catch (error) {
      this.setState({ hasError: true, fetching: false })
    }
  }

  render() {
    const { comics, hasError, fetching } = this.state

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>New Comics</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.refetchData}>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        <Content>
          {fetching ? (
            <Spinner />
          ) : (
            <>
              {hasError && <Text>Error! Oh noe!</Text>}
              {!!comics && <ComicsList comics={comics} />}
            </>
          )}
        </Content>
      </Container>
    )
  }
}
