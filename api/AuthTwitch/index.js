const querystring = require('querystring')
const axios = require('axios')

const clientId = '8fyg9sl1lzyt9lo1enp02ec8avrjkc'
const scope = 'user:read:email'
const { CLIENT_SECRET, HOST_API, HOST_FRONTEND } = process.env

const getCodeRedirect = (context) => {
  const query = {
    client_id: clientId,
    redirect_uri: `${HOST_API}/api/auth/twitch`,
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

const getToken = async (context, code) => {
  const url = 'https://id.twitch.tv/oauth2/token'
  const query = {
    client_id: clientId,
    client_secret: CLIENT_SECRET,
    redirect_uri: `${HOST_API}/api/auth/twitch`,
    code,
    grant_type: 'authorization_code'
  }

  try {
    return await axios.post(url, querystring.stringify(query))
  } catch (err) {
    return err.response
  }
}

module.exports = async function (context, req) {
  const code = req.query.code || false

  if (code) {
    const res = await getToken(context, code)

    if (res.data.access_token) {
      context.res = {
        status: 302,
        headers: {
          location: HOST_FRONTEND
        }
      }
    } else {
      context.res = {
        status: 302,
        headers: {
          location: `${HOST_FRONTEND}/login`
        }
      }
    }
  } else {
    getCodeRedirect(context)
  }
}
