import styled from 'styled-components'
import { Container } from '@firedlabs/design-system'
import { ActionCardStyles } from '@firedlabs/design-system/dist/components/ActionCard/styles'

const Actions = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > ${ActionCardStyles}:not(:last-child) {
    margin-right: var(--gap-big);
  }

  @media (max-width: 640px) {
    & > ${ActionCardStyles} {
      flex-shrink: 0;
      font-size: 14px;
      line-height: 1.5;
      max-width: 200px;
      max-height: 200px;
      min-width: 120px;
      min-height: 120px;
      width: 42vw;
      height: 42vw;
    }
    & > ${ActionCardStyles}:nth-child(odd) {
      margin-right: var(--gap-big);
    }
  }

  @media (max-width: 320px) {
    & > ${ActionCardStyles} {
      font-size: 12px;
    }
  }
`

export default Actions
