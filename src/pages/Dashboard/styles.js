import styled from 'styled-components'
import { TitleLiveStyle } from '@firedlabs/design-system/dist/components/TitleLive/styles'
import { CoverStyle } from '@firedlabs/design-system/dist/components/Cover/styles'
import { Action, Image } from '@firedlabs/design-system'
import { Cursor } from '@firedlabs/design-system/dist/Styles/Tools/Cursor'

export const CoverAction = styled.div`
  align-self: flex-start;
  ${Cursor.hover}
`

export const Streamer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 var(--gap-big) var(--gap-big);

  & > ${Action} {
    text-decoration: none;
    margin-bottom: var(--gap-medium);
    align-self: flex-start;
  }

  & ${TitleLiveStyle} {
    margin-bottom: var(--gap-small);

    &:hover > ${Image} {
      transform: translateY(-0.5rem);
    }
  }

  & ${CoverStyle} {
    min-width: 290px;
    max-width: 320px;

    &:hover {
      transform: scale(1.02);
    }
  }
`
