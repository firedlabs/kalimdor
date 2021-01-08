const axios = require('axios')
const querystring = require('querystring')

const clientId = '8fyg9sl1lzyt9lo1enp02ec8avrjkc'
const { CLIENT_SECRET, HOST_API } = process.env

module.exports = async function (context, req) {
  const code = req.query.code
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
