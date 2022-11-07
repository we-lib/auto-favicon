/**
 * - written in <= ES2015 for compatibility
 * - supports UMD + CommonJS
 * - TODO: supports ES-Module ?
 */
;(function (exports) {
  // How to detect emoji using javascript
  // https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
  // +modification title-favicon bugfix: recognize emoji `✋🏻`
  var emojiPrefixRegex =
    /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])+/

  // Use emoji as favicon in websites
  // https://stackoverflow.com/questions/59431371/use-emoji-as-favicon-in-websites
  var lastFavicon = ''
  function setFavicon(s) {
    try {
      var canvas = document.createElement('canvas')
      canvas.height = 32
      canvas.width = 32
      var ctx = canvas.getContext('2d')
      var isEmoji = emojiPrefixRegex.test(s)
      ctx.font = isEmoji ? '28px serif' : '32px serif'
      ctx.fillStyle = isDarkMode ? 'orange' : '#336699' // for text color
      ctx.textAlign = 'center'
      ctx.fillText(s, 16, 24)
      var dataUrl = canvas.toDataURL()

      var parent = document.querySelector('head') || document.documentElement
      var rels = ['icon']
      rels.forEach(key => {
        var link = document.querySelector('link[rel=' + key + ']')
        if (link) {
          link.setAttribute('href', dataUrl)
        } else {
          link = document.createElement('link')
          link.setAttribute('rel', key)
          link.setAttribute('href', dataUrl)
          parent.appendChild(link)
        }
      })

      lastFavicon = s
      return true // success flag
    } catch (err) {
      // ignore
      // keep it save in case of browser compatibility issues
      console.error('setFavicon', err)
    }
  }

  function getLastFavicon() {
    return lastFavicon
  }

  function detectShouldApply(userAgent) {
    userAgent = userAgent || navigator.userAgent

    var isMobile = /Mobile[\/ ]|Android|iPad/.test(userAgent) // confidence: high
    // var isAndroid = /Android/.test(userAgent) // confidence: high
    var isHuaweiBr = /HuaweiBrowser/.test(userAgent) // confidence: high
    var isWechat = /MicroMessenger|Wechat|Weixin/.test(userAgent) // confidence: high
    var isQQ = /M?QQBrowser/.test(userAgent) // confidence: high
    // var isUC = /\bUCBrowser/.test(userAgent) // confidence: high
    var isSafari = /Version\/[\d.]+\s+Safari/.test(userAgent) // confidence: low

    return !isWechat && !isSafari && (isMobile ? isHuaweiBr || isQQ : true)
  }

  exports.libTextFavicon = {
    emojiPrefixRegex,
    setFavicon: setFavicon,
    getLastFavicon: getLastFavicon,
    detectShouldApply: detectShouldApply
  }
})(
  typeof window === 'object'
    ? window
    : typeof module === 'object'
    ? module.exports
    : {}
)
