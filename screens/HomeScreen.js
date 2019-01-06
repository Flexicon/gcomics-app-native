import React from 'react'
import styled from 'styled-components/native'
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Button,
  Content,
  Icon,
  Title,
  Spinner,
  Text,
  Toast,
} from 'native-base'

import ComicsList from '../components/ComicsList'

const Wrap = styled(Container)`
  background-color: #f1f1f1;
`

const ErrorMsg = styled(Text)`
  color: #888;
  padding-top: 30;
  text-align: center;
`

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
    this.setState({ comics: null, hasError: false, fetching: true })
    try {
      const response = await fetch('http://gcomics.nerfthis.xyz/api/v1/comics')
      const { data } = await response.json()

      this.setState({ comics: data, fetching: false })
    } catch (error) {
      this.setState({ hasError: true, fetching: false })
      Toast.show({
        text: error.message,
        duration: 2000,
      })
    }
  }

  render() {
    const { comics, hasError, fetching } = this.state

    return (
      <Wrap>
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
              {hasError && <ErrorMsg>Fetching comics failed, please try again.</ErrorMsg>}
              {!!comics && <ComicsList comics={comics} />}
            </>
          )}
        </Content>
      </Wrap>
    )
  }
}
