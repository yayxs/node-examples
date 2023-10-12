## node.js 借助 multer 实现文件上传

接触了文件上传的方式，在`node`生态有一种比较成熟的方式：使用`express` 的一个中间件。

- [中间件的 github 地址](https://github.com/expressjs/multer)

在仓库中 `readme` 文件中详细的描述该如何使用。下文作为简单的描述：

### 初始化仓库

初始化一个 node 的仓库，然后安装相应的包： `express` `cors` `multer`

### 案例

```js
const express = require('express') // web framework for node 非node 内置
const multer = require('multer') // 引入multer express 的一个中间件 用来文件上传；非node 内置
const cors = require('cors') // 用来解决跨域问题 非node内置

const app = express()
app.use(cors()) // 使用一下就不跨域了

// 自己指定怎么存储 multer.diskStorage是用磁盘来存储
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  }, // destination 指定保存的目录
  filename: (req, file, cb) => {
    // filename  指定文件的名字 + 时间戳

    /**
   * req.file {
  fieldname: 'aaa',
  originalname: 'my-store.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads/',
  filename: '2d9cb8131bdf84f8363be433ac373047',
  path: 'uploads\\2d9cb8131bdf84f8363be433ac373047',
  size: 45963
   */

    cb(null, file.originalname + '-' + Date.now())
  }
})

// 注册一个对象
const upload = multer({
  storage
})

// 使用中间件，没有挂载路径，应用的每个请求都会执行该中间件。
// any表示接受一切，具体参考文档。
app.use(upload.any())

// 在req.files中获取文件数据
app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.files)
  res.send('上传文件成功')
})

// node 服务的端口是3000
app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})
```
