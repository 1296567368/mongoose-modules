//引入mongoose包
const mongoose = require('mongoose')
//将连接数据库  返回的promise对象返回出去
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0223-test',
{useNewUrlParser: true,useUnifiedTopology: true})