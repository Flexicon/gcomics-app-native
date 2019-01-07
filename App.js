import React from 'react'
import PropTypes from 'prop-types'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { Root } from 'native-base'
import AppNavigator from './src/app/navigation/AppNavigator'

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require('./src/assets/images/robot-dev.png'),
        require('./src/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      }),
    ])

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    /* eslint-disable-next-line */
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render() {
    const { skipLoadingScreen } = this.props
    const { isLoadingComplete } = this.state

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
}

App.defaultProps = {
  skipLoadingScreen: false,
}

export default App
