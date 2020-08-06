import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import api from 'src/services/api'

import { Container } from '../styles/global'
import {
  PageLanding,
  ButtonsContainer,
  GiveClasses,
  HeroImage,
  LogoContainer,
  Study,
  TotalConnections
} from '../styles/pages/index'

const Home: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState()

  useEffect(() => {
    api.get('/connections').then(response => {
      setTotalConnections(response.data.total)
    })
  }, [])

  return (
    <PageLanding>
      <Container id="page-landing-content">
        <LogoContainer>
          <img src="/images/logo.svg" alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>

        <HeroImage src="/images/landing.svg" alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link href="/study" passHref>
            <Study>
              <img src="/images/icons/study.svg" alt="Estudar" />
              Estudar
            </Study>
          </Link>
          <Link href="/give-classes" passHref>
            <GiveClasses>
              <img src="/images/icons/give-classes.svg" alt="Dar aulas" />
              Dar aulas
            </GiveClasses>
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src="/images/icons/purple-heart.svg" alt="Coração Roxo" />
        </TotalConnections>
      </Container>
    </PageLanding>
  )
}

export default Home
