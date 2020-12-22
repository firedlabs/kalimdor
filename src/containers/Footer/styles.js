import styled from 'styled-components'
import { Section, FiredLabs } from '@firedlabs/design-system'

const FooterStyle = styled(Section).attrs({ backgroundColor: 'colorSecond' })`
  border-bottom: none;
  display: flex;
  justify-content: center;

  & > ${FiredLabs} {
    height: 7rem;
    min-height: 50px;
  }
`

export default FooterStyle
