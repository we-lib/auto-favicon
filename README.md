# auto-favicon

> Sets favicon for you based on title, with emoji support.

*This module is separated from [silent](https://github.com/fritx/silent?tab=readme-ov-file#funny--fancy--performance), a static blog framework.*

![](https://blog.fritx.me/p/projects/silent_2.0/WechatIMG533.png)

![](https://blog.fritx.me/p/projects/silent_2.0/WX20220927-173925.png)

## Example

```html
<title>&nbsp;</title>
<!-- As UMD module via CDN -->
<script src="https://unpkg.com/auto-favicon@0.0.2/index.js"></script>
<script>
// 👉🏻 https://blog.fritx.me/?projects/react-drag-sizing/
libAutoFavicon.autoFavicon('✋🏻 react-drag-sizing: 拖拽缩放组件')
// 👉🏻 https://blog.fritx.me/?projects/vue-at/
libAutoFavicon.autoFavicon('👨‍👩‍👧‍👦 vue-at: 文本框@人组件')
</script>
```

```js
// As NPM library
let libAutoFavicon = require('auto-favicon')
// 👉🏻 https://blog.fritx.me/?2022/09/blog-setup-via-github-fork
libAutoFavicon.autoFavicon('🚀 Blog Setup via Github Fork')

// Also, supports plain title, without an emoji
// 👉🏻 https://blog.fritx.me/?projects/silent_2.0/
libAutoFavicon.autoFavicon('silent 2.0')
```

## Respond to Dark Mode Change

```js
// addEventListener on page/component create
libAutoFavicon.startListenDarkMode()

// don't forget to removeEventListener on page/component destroy
libAutoFavicon.stopListenDarkMode()
```

## API & Options

- autoFavicon(title=document.title, dontSetDocTitle=false, emojiOnly=false): string
- setFavicon(text: string)
- detectShouldApply(userAgent=navigator.userAgent): boolean
- startListenDarkMode()
- stopListenDarkMode()

## License

MIT
