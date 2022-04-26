// 结构化 字符串
// URL 对象
// nodejs url api
// 浏览器实现的

const url = require('url')

/**
 * hash '#/home?id=1'
 * host localhost:2021
 * hostname localhost
 * href 'http://localhost:2021/#/home?id=1'
 * origin 'http://localhost:2021'
 * pathname '/'
 */

const myURL = new URL(`http://localhost:2021/#/home?id=1`)

/**
 * url.parse() 方法接受一个 URL 字符串，对其进行解析，然后返回一个 URL 对象。

如果 urlString 不是字符串，则会引发 TypeError。

如果 auth 属性存在但无法解码，则会引发 URIError。

不鼓励使用旧的 url.parse() 方法。 用户应使用 WHATWG URL API。 因为 url.parse() 方法使用一种宽松的、非标准的算法来解析 URL 字符串，所以可能会引入安全问题。 具体来说，已经确定了主机名欺骗和用户名和密码处理不正确的问题。
 */

// const myUrl = url.parse(URL) // 不推荐

// console.log(myURL)

/**
 * hash ''
 * host 'nodejs.org'
 * hostname 'nodejs.org'
 * href 'https://nodejs.org/dist/latest-v16.x/docs/api/url.html'
 * origin 'https://nodejs.org'
 * pathname '/dist/latest-v16.x/docs/api/url.html'
 * protocol 'https:'
 * 
 */
const nodeDocs = new URL(`https://nodejs.org/dist/latest-v16.x/docs/api/url.html`)




console.log('')