import PropTypes from 'prop-types'
import * as I from 'intz-design-system'

function Online({ streamers }) {
  return <I.Carousel lives={streamers} />
}

Online.propTypes = {
  streamers: PropTypes.array.isRequired
}

export default Online
