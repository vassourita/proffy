import Link from 'next/link'
import React from 'react'

import {
  PageHeaderContainer,
  TopBarContainer,
  HeaderContent
} from '../styles/components/pageHeader'

interface IPageHeaderProps {
  title: string
  description?: string
}

export const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  description,
  children
}) => (
  <PageHeaderContainer className="page-header">
    <TopBarContainer>
      <Link href="/" passHref>
        <a>
          <img src="/images/icons/back.svg" alt="Voltar" />
        </a>
      </Link>

      <img src="/images/logo.svg" alt="Voltar" />
    </TopBarContainer>

    <HeaderContent className="header-content">
      <strong>{title}</strong>
      {description && <p>{description}</p>}
      {children}
    </HeaderContent>
  </PageHeaderContainer>
)
