import React from 'react'
import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { Container } from 'native-base'

const ContainerStyled = styled(Container)`
  background: transparent;
`

const ContainerWithBg = ({ children }) => (
  <ImageBackground
    source={require('../../assets/images/qbkls.png')}
    style={{ width: '100%', height: '100%' }}
  >
    <ContainerStyled>{children}</ContainerStyled>
  </ImageBackground>
)

export default ContainerWithBg
