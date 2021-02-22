import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import { AppLoading, Asset, Font } from 'expo'
import { Root } from 'native-base'

import AppNavigator from './src/app/navigation/AppNavigator'
import comicsStore from './src/app/store/comics-store'
import NavigationService from './src/app/navigation/NavigationService'

// Persist the navigation state tree when in DEV mode
const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require('./src/assets/images/robot-dev.png'),
        require('./src/assets/images/robot-prod.png'),
        require('./src/assets/images/qbkls.png'),
      ]),
      Font.loadAsync({
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
        <Provider comicsStore={comicsStore}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef)
            }}
            persistenceKey={navigationPersistenceKey}
          />
        </Provider>
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
