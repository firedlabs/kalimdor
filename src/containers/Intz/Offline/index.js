import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as I from 'intz-design-system'
import Section from '../Section'
import { Wrapper, Avatar } from './styles'

function Offline({ streamers }) {
  return (
    <Section>
      <I.Title>Streamers Offline</I.Title>

      <Wrapper>
        {streamers.map(({ avatar, twitch }) => (
          <Link to={twitch} key={twitch}>
            <Avatar src={avatar} />
          </Link>
        ))}
      </Wrapper>
    </Section>
  )
}

const streamer = {
  avatar: PropTypes.string.isRequired,
  twitch: PropTypes.string.isRequired
}

Offline.propTypes = {
  streamers: PropTypes.arrayOf(PropTypes.shape(streamer))
}

export default Offline
