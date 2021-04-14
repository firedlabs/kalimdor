import PropTypes from 'prop-types'
import { Heading, Profile, Description } from '@firedlabs/design-system'
import { InstructorStyle, Content } from './styles'

function Instructor({ data }) {
  const { avatar, name, socialMedias, bio } = data

  return (
    <InstructorStyle
      backgroundColor="colorBlackFirst"
      big
      borderColor="colorFirst"
    >
      <Heading big>Instrutor</Heading>
      <Content>
        <Profile avatar={avatar} name={name} socialMedias={socialMedias} />

        <Description>{bio}</Description>
      </Content>
    </InstructorStyle>
  )
}

const medias = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const instructor = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(PropTypes.shape(medias)),
  bio: PropTypes.string.isRequired
}

Instructor.propTypes = {
  data: PropTypes.shape(instructor).isRequired
}

export default Instructor
