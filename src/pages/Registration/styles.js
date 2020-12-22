import styled from 'styled-components'
import { Section, Icons } from '@firedlabs/design-system'
import { BoxStyles } from '@firedlabs/design-system/dist/components/Box/styles'

export const Header = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const WrapperIcons = styled.div`
  --icon-height: 10rem;

  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--icon-height) / -2);
  margin-bottom: var(--gap-smallest);

  & > ${Icons} {
    height: var(--icon-height);
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: 0 auto;

  & > ${BoxStyles} {
    margin-bottom: var(--gap-small);
  }
`

export const CourseContent = styled(Section)`
  & ${BoxStyles} {
    margin-bottom: var(--gap-biggest);
  }
`
