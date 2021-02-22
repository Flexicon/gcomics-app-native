import React from 'react'
import styled from 'styled-components/native'
import { inject, observer } from 'mobx-react'
import { Content, Icon, Text } from 'native-base'
import { RefreshControl } from 'react-native'

import ComicsList from '../components/ComicsList'
import ContainerWithBg from '../components/ContainerWithBg'
import HeaderButton from '../components/HeaderButton'

const ErrorMsg = styled(Text)`
  color: #888;
  padding-top: 30;
  text-align: center;
`

@inject(['comicsStore'])
@observer
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: (
      <HeaderButton transparent>
        <Icon name="menu" />
      </HeaderButton>
    ),
    title: 'Latest Comics',
    headerRight: (
      <HeaderButton transparent>
        <Icon name="search" />
      </HeaderButton>
    ),
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
