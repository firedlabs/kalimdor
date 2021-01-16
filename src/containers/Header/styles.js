import styled from 'styled-components'
import { Section, FiredLabs, Button } from '@firedlabs/design-system'
import { ActionImageStyle } from '@firedlabs/design-system/dist/components/ActionImage/styles'
import { BoxShadow } from '@firedlabs/design-system/dist/Styles/Tools'

const HeaderStyle = styled(Section).attrs({
  backgroundColor: 'colorSecond',
  smallest: true,
  as: 'header'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--gap-big);

  & ${FiredLabs}, & > ${ActionImageStyle} {
    height: 5.6rem;
    min-height: 40px;
    flex-shrink: 0;
    width: auto;
  }

  & > ${ActionImageStyle} {
    padding: 0.2rem;
    ${BoxShadow.small}
  }

  & > ${Button}:hover {
    transform: translateY(calc(var(--gap-smallest) / -2)) scale(1.03);
  }
`

export default HeaderStyle
