import { NavigationActions } from 'react-navigation'

class NavigationService {
  navigator = null

  setTopLevelNavigator(navigatorRef) {
    this.navigator = navigatorRef
  }

  navigate(routeName, params) {
    this.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    )
  }
}

export default new NavigationService()
