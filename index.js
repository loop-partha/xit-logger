let appname = 'xit-logger'
module.exports = function (options) {
  console.log(options)
  appname = `${options.application}` || 'xit-logger'
  console.log(appname, '> starting')
  console.log(appname, '> started')
  return function (req, res, next) {
    console.log(appname, '/request', '>', req.url)
    return next()
  }
}

module.exports.info = function (text) {
  console.log(text)
}