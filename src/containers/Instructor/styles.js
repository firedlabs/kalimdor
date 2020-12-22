import styled from 'styled-components'
import { ProfileStyle } from '@firedlabs/design-system/dist/components/Profile/styles'

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;

  & > ${ProfileStyle} {
    flex-shrink: 0;
    margin-right: var(--gap-biggest);
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    & > ${ProfileStyle} {
      margin-right: 0;
      margin-bottom: var(--gap-big);
    }
  }
`

export default Content
