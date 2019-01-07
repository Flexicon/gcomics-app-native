import React from 'react'
import styled from 'styled-components/native'
import { inject, observer } from 'mobx-react'
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
} from 'native-base'
import { RefreshControl } from 'react-native'

import ComicsList from '../components/ComicsList'

const ContainerStyled = styled(Container)`
  background-color: #f1f1f1;
`

const ErrorMsg = styled(Text)`
  color: #888;
  padding-top: 30;
  text-align: center;
`

@inject(['comicsListStore'])
@observer
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const { comicsListStore } = this.props
    comicsListStore.fetchComics()
  }

  render() {
    const { comicsListStore } = this.props
    const { comics, hasError, fetching } = comicsListStore

    return (
      <ContainerStyled>
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
      </ContainerStyled>
    )
  }
}

export default HomeScreen
