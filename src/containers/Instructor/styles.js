import styled from 'styled-components'
import { ProfileStyle } from '@firedlabs/design-system/dist/components/Profile/styles'
import { Container, Section } from '@firedlabs/design-system'

export const Content = styled(Container)`
  display: flex;
  justify-content: space-between;

  & > ${ProfileStyle} {
    flex-shrink: 0;
    margin-right: var(--gap-biggest);
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    text-align: center;

    & > ${ProfileStyle} {
      margin-right: 0;
      margin-bottom: var(--gap-big);
    }
  }
`

export const InstructorStyle = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
