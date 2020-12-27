import styled from 'styled-components'
import { Section, ActionImage } from '@firedlabs/design-system'

const SupportersStyle = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${ActionImage} {
    margin-right: var(--gap-medium);
  }
`

export default SupportersStyle
