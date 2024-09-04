// 引入express并use使用它
const express = require('express')
const app = express()

//导入解决跨域
const cors = require('cors')
app.use(cors())

// 用于post接收前端参数
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 用户查询接口
app.get('/userList', (req, res) => {
    // req.query拿到前端传的参数
    let obj = req.query
    console.log(obj);
    let list = [
        { name: '张三', age: 32, sex: '男', job: '程序员' },
        { name: '李四', age: 12, sex: '女', job: '视频教程师' },
        { name: '王五', age: 42, sex: '男', job: '自由职业者' }
    ]

    // 利用参数删选出需要的数据
    if (obj.sex == 0) {
        list = list.filter(v => {
            return v.sex == '女'
        })
    } else if (obj.sex == 1) {
        list = list.filter(v => {
            return v.sex == '男'
        })
    }

    // 返回给前端的数据
    res.send(list)
})


// 新闻列表查询接口
app.post('/newsList', (req, res) => {
    let obj = req.body
    console.log(obj.id, '接收到的前端参数');
    let list = [
        { id: 1, title: '新闻标题一', time: '2023-7-1', desc: '这是新闻的简介描述1' },
        { id: 2, title: '新闻标题二', time: '2023-7-2', desc: '这是新闻的简介描述2' },
        { id: 3, title: '新闻标题三', time: '2023-7-3', desc: '这是新闻的简介描述3' },
    ]
    // 如果传来id则删选  否则返回全部数据
    if (obj.id) {
        list = list.filter(v => {
            return v.id == obj.id
        })
    }

    res.send(list)
})


app.listen(80, () => {
    console.log('server success,本地服务器已经启动在80端口!');
})
