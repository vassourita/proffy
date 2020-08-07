import React, { useCallback, useEffect, useState } from 'react'
import { Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import studyIcon from '../../assets/images/icons/study.png'
import landingImg from '../../assets/images/landing.png'
import api from '../../services/api'
import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonStudy,
  TextButton,
  ButtonTeacher,
  TotalConnections
} from './styles'

const Landing: React.FC = () => {
  const navigation = useNavigation()

  const [totalConnection, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then(response => {
      setTotalConnections(response.data.total)
    })
  }, [])

  const handleNativeToGiveClassesPage = useCallback(() => {
    navigation.navigate('GiveClasses')
  }, [navigation])

  const handleNavigateToStudyPage = useCallback(() => {
    navigation.navigate('Study')
  }, [navigation])

  return (
    <Container>
      <Banner source={landingImg} resizeMode="contain" />

      <Title>
        Seja bem-vindo,
        {'\n'}
        <TitleBold>O que deseja fazer ?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonStudy onPress={handleNavigateToStudyPage}>
          <Image source={studyIcon} />
          <TextButton>Estudar</TextButton>
        </ButtonStudy>

        <ButtonTeacher onPress={handleNativeToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <TextButton>Dar aula</TextButton>
        </ButtonTeacher>
      </ButtonsContainer>

      <TotalConnections>
        {`Total de ${totalConnection} conexão já realizadas`}
        {'  '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  )
}

export default Landing
