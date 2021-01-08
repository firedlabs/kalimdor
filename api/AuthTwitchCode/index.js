const querystring = require('querystring')

const { CLIENT_ID, HOST_API } = process.env
const scope = 'user:read:email'

module.exports = async function (context) {
  const query = {
    client_id: CLIENT_ID,
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
