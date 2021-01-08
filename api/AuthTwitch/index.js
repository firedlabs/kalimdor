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

const getToken = async (code, context) => {
  const url = 'https://id.twitch.tv/oauth2/token'
  const query = {
    client_id: clientId,
    client_secret: CLIENT_SECRET,
    redirect_uri: `${HOST_API}/api/auth/twitch`,
    code,
    grant_type: 'authorization_cod'
  }
  let res = false

  try {
    res = await axios.post(url, querystring.stringify(query))
  } catch (err) {
    const { status, message } = err.response.data

    context.res = {
      status,
      body: {
        message
      }
    }
  }

  if (res) {
    context.res = {
      body: {
        data: res.data
      }
    }
  }
}

module.exports = async function (context, req) {
  const code = req.query.code || false

  if (code) {
    await getToken(code)
  } else {
    getCodeRedirect(context)
  }
}
