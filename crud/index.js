
; (async function () {
    //注意: 要对数据库进行操作,要先保证数据库连接成功
    //引入db并执行,接收到一个prommise对象
    const db = require('../db')
    //等待promise状态成功后才会执行后面代码,即连接数据库成功后执行
    await db
    console.log('数据库连接成功');
    //引入model对象 
    //注意:如果要引入的路径是model/index.js(文件夹里面是一个index.js文件),那么可以忽略index.js
    //使用变量接收model集合对象
    const usersModel = require('../mondel')

    //向集合中添加数据  集合对象.create方法 
    //所有增删改查 都是异步操作
    await usersModel.create({
        name: '丽',
        age: 22,
        gender:'女'
    }/* ,(err,data)=>{
        console.log(err,data);
    } */)
    //所有增删改查方法 如果不写回调函数 默认返回一个promise对象,创建成功后,promise对象状态被修改为成功

    //find返回的promise对象,如果成功了,值就是查询到的数据
    const users = await usersModel.find()
    console.log(users);

})()