import styled from 'styled-components'
import { Section, FiredLabs } from '@firedlabs/design-system'
import { ActionImageStyle } from '@firedlabs/design-system/dist/components/ActionImage/styles'

export const HeaderStyle = styled(Section).attrs({
  backgroundColor: 'colorSecond',
  smallest: true,
  as: 'header'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--gap-big);

  & ${FiredLabs}, & ${ActionImageStyle} {
    height: 5.6rem;
    min-height: 40px;
    flex-shrink: 0;
    width: auto;
  }
`
