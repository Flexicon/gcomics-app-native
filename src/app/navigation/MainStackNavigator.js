import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'

const NavStack = createStackNavigator({
  Home: HomeScreen,
})

export default NavStack
