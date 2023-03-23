import React from 'react'
import styled from 'styled-components'

const Loader = () => {

  return (
    <Wrapper>
      {[...Array(9)].map((_, i) => (
        <div key={i} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`

  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #a868b6;
    animation: lds-grid 1.2s linear infinite;
  }

  & div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }

  & div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }

  & div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }

  & div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }

  & div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }

  & div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }

  & div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }

  & div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }

  & div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }

  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

export default Loader