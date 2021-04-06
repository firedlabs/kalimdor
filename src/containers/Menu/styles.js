import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const animationLoadingMenu = keyframes`
  to {
    transform: translateX(0)
  }
  from {
    transform: translateX(calc(100% * 25 - 100%));
  }
`

const hasLoading = ({ loading }) =>
  loading &&
  css`
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--color-black-first);
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 4%;
      left: 0;
      background-color: var(--color-third);
      animation: 1.5s ${animationLoadingMenu} ease-in-out infinite alternate;
    }
  `

export const Action = styled(Link)`
  color: var(--color-third);
  font-size: 2rem;
  margin-right: var(--gap-medium);
`

export const Navigation = styled.nav`
  & > ${Action} {
    ${hasLoading};
  }
`

export const MenuStyle = styled.nav`
  display: flex;
  align-items: center;
`
