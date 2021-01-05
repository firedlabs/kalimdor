import styled from 'styled-components'
import { Section, FiredLabs, Button } from '@firedlabs/design-system'
import { ActionImageStyle } from '@firedlabs/design-system/dist/components/ActionImage/styles'

const HeaderStyle = styled(Section).attrs({
  backgroundColor: 'colorSecond',
  smallest: true,
  as: 'header'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${FiredLabs}, & > ${ActionImageStyle} {
    height: 5.6rem;
    min-height: 40px;
    flex-shrink: 0;
    width: auto;
  }

  & > ${Button}:hover {
    transform: translateY(calc(var(--gap-smallest) / -2)) scale(1.03);
  }
`

export default HeaderStyle
