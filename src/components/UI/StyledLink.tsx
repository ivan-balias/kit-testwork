import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;

  &.active {
    color: #a868b6;
  }
`

export default StyledLink