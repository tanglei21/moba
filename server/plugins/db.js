module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://leo:tl123456@ds049864.mlab.com:49864/moba', {
    useNewUrlParser: true
  })

  // 文件初始相互引用
  require('require-all')(__dirname + '/../models')
}