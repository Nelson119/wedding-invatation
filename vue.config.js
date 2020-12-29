// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
  ? '/wedding-invitation/'
  : '/'
}