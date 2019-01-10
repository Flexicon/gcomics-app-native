import React from 'react'
import styled from 'styled-components/native'
import { inject, observer } from 'mobx-react'
import { Header, Body, Left, Right, Button, Content, Icon, Title, Text } from 'native-base'
import { RefreshControl } from 'react-native'

import ComicsList from '../components/ComicsList'
import ContainerWithBg from '../components/ContainerWithBg'

const ErrorMsg = styled(Text)`
  color: #888;
  padding-top: 30;
  text-align: center;
`

@inject(['comicsStore'])
@observer
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const { comicsStore } = this.props
    comicsStore.fetchComics()
  }

  render() {
    const { comicsStore } = this.props
    const { comics, hasError, fetching } = comicsStore

    return (
      <ContainerWithBg>
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
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content
          refreshControl={<RefreshControl refreshing={fetching} onRefresh={this.fetchData} />}
        >
          {hasError && <ErrorMsg>Fetching comics failed, please try again.</ErrorMsg>}
          <ComicsList comics={comics} />
        </Content>
      </ContainerWithBg>
    )
  }
}

export default HomeScreen
