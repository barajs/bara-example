const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const appIncludes = [resolveApp('src')]
module.exports = {
  babel: {
    plugins: ['@babel/plugin-proposal-class-properties'],
  },
  webpack: {
    configure: (config, { env, paths }) => {
      config.module.rules[0].include = appIncludes
      config.module.rules[1] = null
      config.module.rules[2].oneOf[1].include = appIncludes
      config.module.rules[2].oneOf[1].options.plugins = [
        require.resolve('babel-plugin-react-native-web'),
      ].concat(config.module.rules[2].oneOf[1].options.plugins)

      config.module.rules = config.module.rules.filter(Boolean) // Clear null rules

      config.plugins[9].tsconfig = resolveApp('tsconfig.web.json')

      return config
    },
  },
}
