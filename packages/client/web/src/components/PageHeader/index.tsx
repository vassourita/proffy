import Link from 'next/link'
import React from 'react'

import { PageHeaderContainer, TopBarContainer, HeaderContent } from './styles'

interface IPageHeaderProps {
  title: string
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ title, children }) => (
  <PageHeaderContainer>
    <TopBarContainer>
      <Link href="/" passHref>
        <a>
          <img src="/images/icons/back.svg" alt="Voltar" />
        </a>
      </Link>

      <img src="/images/logo.svg" alt="Voltar" />
    </TopBarContainer>

    <HeaderContent>
      <strong>{title}</strong>
      {children}
    </HeaderContent>
  </PageHeaderContainer>
)
