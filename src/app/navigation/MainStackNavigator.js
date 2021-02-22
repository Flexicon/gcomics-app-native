import { createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import ComicDetailsScreen from '../screens/ComicDetailsScreen'

const NavStack = createStackNavigator(
  {
    Home: HomeScreen,
    ComicDetails: ComicDetailsScreen,
  },
  {
    cardStyle: {
      marginTop: Platform.OS === 'android' ? -20 : 0,
    },
  },
)

export default NavStack
