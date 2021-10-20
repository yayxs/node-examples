const { createServer } = require('http')
const { Sequelize, DataTypes } = require('sequelize')

const { DB_HOST, DB_USER, DB_PASS } = require('dotenv').config().parsed

const server = createServer((req, res) => {})

const sequelize = new Sequelize('vast_h5_temp', DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
})

// 关闭连接
// sequelize.close()(这是异步的并返回一个 Promise).

;(async () => {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

const User = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // 或 Sequelize.UUIDV1
    },
  },
  {
    freezeTableName: false,
  }
)

// 创建一个新用户
;(async () => {
  await sequelize.sync({ force: true })
  const admin = await User.create({ username: 'admin', password: 'admin' })
  console.log('admin', admin)
})()
server.listen(3000, '127.0.0.1', () => {
  console.log('http://127.0.0.1:3000')
})
