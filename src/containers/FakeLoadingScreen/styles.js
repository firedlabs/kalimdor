import styled, { css } from 'styled-components'
import { LoadingStyle } from '@firedlabs/design-system/dist/components/Loading/styles'

const hasNoPage = ({ noPage }) =>
  noPage &&
  css`
    position: fixed;
    top: 0;
    left: 0;
  `

const hasActive = ({ active }) =>
  active &&
  css`
    z-index: 100;
    background-color: var(--color-black-second);
  `

const FakeLoadingScreenStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: -1;

  & > ${LoadingStyle} {
    top: 50%;
  }

  ${hasNoPage};
  ${hasActive}
`

export default FakeLoadingScreenStyle
