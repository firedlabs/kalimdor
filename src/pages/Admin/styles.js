import styled from 'styled-components'
import { Container } from '@firedlabs/design-system'
import { ActionCardStyles } from '@firedlabs/design-system/dist/components/ActionCard/styles'

export const Actions = styled(Container)`
  display: flex;

  & > ${ActionCardStyles} {
    margin-right: var(--gap-big);
  }
`
