import styled from 'styled-components'
import { LoadingStyle } from '@firedlabs/design-system/dist/components/Loading/styles'

const FakeLoadingScreenStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  & > ${LoadingStyle} {
    top: 50%;
  }
`

export default FakeLoadingScreenStyle
