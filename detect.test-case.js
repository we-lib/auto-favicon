exports.testCases = [
  {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15',
    type: 'MacOS Safari',
    shouldApply: false // always not showing correct favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
    type: 'MacOS Chrome',
    shouldApply: true // OK
  },
  {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:97.0) Gecko/20100101 Firefox/97.0',
    type: 'MacOS Firefox',
    shouldApply: true // OK
  },
  {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Safari/605.1.15',
    type: 'iPad Safari',
    shouldApply: false // always not showing correct favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/105.0.5195.129 Mobile/15E148 Safari/604.1',
    type: 'iPad Chrome',
    shouldApply: false // always not showing correct favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2c) NetType/WIFI Language/zh_CN',
    type: 'iPad Wechat',
    shouldApply: false // shows title only, without favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
    type: 'iPhone Safari',
    shouldApply: false // always not showing correct favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/106.0.5249.75 Mobile/15E148 Safari/604.1',
    type: 'iPhone Chrome',
    shouldApply: false // always not showing correct favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d2b) NetType/WIFI Language/zh_CN',
    type: 'iPhone Wechat',
    shouldApply: false // shows title only, without favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; HarmonyOS; ELE-AL00; HMSCore 6.7.0.322; GMSCore 20.15.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 HuaweiBrowser/12.1.3.303 Mobile Safari/537.36',
    type: 'HuaweiBrowser',
    shouldApply: true // no navbar; but shows title & favicon while listing tabs
  },
  {
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; ELE-AL00 Build/HUAWEIELE-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4317 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/9383 MicroMessenger/8.0.28.2240(0x28001C39) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
    type: 'Huawei Wechat',
    shouldApply: false // shows title only, without favicon
  },
  {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 10; zh-cn; ELE-AL00 Build/HUAWEIELE-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/49.0.2623.87 MQQBrowser/13.2 Mobile Safari/537.36',
    type: 'Huawei QQBroser',
    shouldApply: true // no navbar; but shows title & favicon while listing tabs
  },
  {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 10; zh-CN; ELE-AL00 Build/HUAWEIELE-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 UCBrowser/15.1.1.1201 Mobile Safari/537.36',
    type: 'Huawei UCBrowser',
    shouldApply: false // no navbar and not showing correct favicon while listing tabs
  }
]
