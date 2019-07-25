var config = {
  apiHost: "http://smart-v4-api-pre.1tai.com"
}
if (typeof window !== 'undefined' && window.document) {
  window.__gConf = config
} else {
  module.exports = config
}
