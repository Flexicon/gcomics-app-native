import styled from 'styled-components/native'
import { Button } from 'native-base'
import { Platform } from 'react-native'

const HeaderButton = styled(Button)`
  margin-top: ${Platform.OS === 'android' ? 6 : 0};
`

export default HeaderButton
