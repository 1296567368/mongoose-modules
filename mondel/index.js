//引入mongoose
const mongoose = require('mongoose')
//创建核心对象 Schema
const usersSchema = new mongoose.Schema({
    name: {
        type: String,//类型
        required: true,//是否为必填项
        unique: true,//是否为唯一值,不允许重复
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        default: "男"
    },
    info: {
        type: mongoose.Schema.Types.Mixed,
        default: "暂无描述信息"
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: 'user'
})
//创建集合对象,
// const usersModel = mongoose.model("user", usersSchema)
// //在其他的js文件中要使用model对象,将集合对象导出去
// module.exports = usersModel
module.exports = mongoose.model("user", usersSchema)