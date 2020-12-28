import styled from 'styled-components'
import { Section, FiredLabs } from '@firedlabs/design-system'

const HeaderStyle = styled(Section).attrs({
  backgroundColor: 'colorSecond',
  smallest: true,
  as: 'header'
})`
  display: flex;
  justify-content: space-between;

  & > ${FiredLabs} {
    height: 5.6rem;
  }
`

export default HeaderStyle
