const express = require('express') // 引入express

const multer = require('multer') //  Express 的中间件 multer 本身是函数

const cors = require('cors') // 中间件cors 处理跨域

const app = express()

app.use(cors())

const upload = multer({ dest: 'uploads/' })

app.post(
  '/aaa',
  upload.single('aaa'),
  (req, res, next) => {
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
}
   */
    console.log('req.file', req.file)
    console.log('req.body', req.body)
  },
  (err) => {
    console.log('文件上传异常', err)
  }
)

app.listen(3333)
