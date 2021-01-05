import styled from 'styled-components'
import { TitleLiveStyle } from '@firedlabs/design-system/dist/components/TitleLive/styles'
import { CoverStyle } from '@firedlabs/design-system/dist/components/Cover/styles'
import { Action, Image } from '@firedlabs/design-system'

const Streamer = styled.section`
  padding: var(--gap-big);

  & > ${Action} {
    text-decoration: none;
  }

  & ${TitleLiveStyle} {
    margin-bottom: var(--gap-small);

    &:hover > ${Image} {
      transform: translateY(-0.5rem);
    }
  }

  & ${CoverStyle}:hover {
    transform: scale(1.02);
  }
`

export default Streamer
