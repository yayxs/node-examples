// 处理文件 和 目录 路径
const path = require('path')
// myfile.html
const baseName = path.basename('C:\\temp\\myfile.html')
const commonBaseName = path.win32.basename('C:\\temp\\myfile.html');
// 目录名称
const dirName = path.dirname('/foo/bar/baz/asdf/quux')
// 扩展名
const extName = path.extname('index.html')

const extName1 = path.extname('index')

const pathObject = {
  root:'/',
  name:'file',
  ext:'.txt'
}

const pathObjectRes = path.format(pathObject) // '/file.text'

const pathJoin = path.join('/foo','bar','baz/asdf','quxx','.','..')

const pathPar  =path.parse('C:\\path\\dir\\file.txt');
// path.resolve([...paths]) 从右往左 构造绝对路径
const pathRes1 = path.resolve('/foo','/bar','baz')

const pathRes2 =  path.resolve('/foo/bar','./baz')
console.log(commonBaseName)
console.log('basename',baseName)
