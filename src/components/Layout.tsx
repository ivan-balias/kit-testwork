import React, { FC } from 'react'
import Container from './UI/Container'
import Header from './common/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header/>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout