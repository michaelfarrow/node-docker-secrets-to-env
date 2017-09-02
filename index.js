var fs = require('fs')
var path = require('path')

var secretsPath = process.env.SECRETS_PATH || '/run/secrets'

if (fs.existsSync(secretsPath)) {
  var secrets = fs.readdirSync(secretsPath)
  secrets.forEach(function (item) {
    process.env[item.toUpperCase()] = fs.readFileSync(path.resolve(secretsPath, item), 'utf8').trim()
  })
}
