import React from 'react'

import ContainerWithBg from '../components/ContainerWithBg'
import ComicDetails from '../components/ComicDetails'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Comic Details',
  }

  render() {
    const { navigation } = this.props
    const comic = navigation.getParam('comic')

    return (
      <ContainerWithBg>
        <ComicDetails comic={comic} />
      </ContainerWithBg>
    )
  }
}

export default HomeScreen
