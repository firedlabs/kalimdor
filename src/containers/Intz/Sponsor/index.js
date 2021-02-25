import PropTypes from 'prop-types'
import * as I from 'intz-design-system'
import Section from '../Section'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'

function Sponsor({ sponsors }) {
  return (
    <Section>
      <I.Title>Patrocinadores</I.Title>

      <Wrapper>
        {sponsors.map(({ logo, url, alt }) => (
          <I.Sponsor key={url} as={Link} to={url} src={logo} alt={alt} />
        ))}
      </Wrapper>
    </Section>
  )
}

const sponsor = { logo: PropTypes.string, link: PropTypes.string }

Sponsor.propTypes = {
  sponsors: PropTypes.arrayOf(sponsor)
}

export default Sponsor
