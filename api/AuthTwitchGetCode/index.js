const querystring = require('querystring')
const clientId = '8fyg9sl1lzyt9lo1enp02ec8avrjkc'
const scope = 'user:read:email'
const { HOST_API } = process.env

module.exports = async function (context) {
  const query = {
    client_id: clientId,
    redirect_uri: `${HOST_API}/api/auth/twitch/token`,
    response_type: 'code',
    scope
  }
  const url = 'https://id.twitch.tv/oauth2/authorize'

  context.res = {
    status: 302,
    headers: {
      location: `${url}?${querystring.stringify(query, '&')}`
    }
  }
}
