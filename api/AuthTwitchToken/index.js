module.exports = async function (context, req) {
  const code = req.query.code || false

  context.res = {
    body: {
      code
    }
  }
}
