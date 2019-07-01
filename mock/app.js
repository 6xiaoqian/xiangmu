// express  框架   node框架    相当于  原生js 和 jquery
let express =require("express")
const cors=require("cors")
let app =express()//会自动创建一个服务器
let fs=require("fs").promises;//文件操作
let path = require("path")//路径
function readList(filename){
   filename =path.resolve(__dirname,filename)//取到文件的绝对路径
    return fs.readFile(filename,'utf-8').then(data=>JSON.parse(data)
    )
}
app.listen(3000)//服务器端口号
app.use(cors())//跨域完成
// 轮播图接口  localhost:3000/banner
let banner=require('./banner')
app.get('/banner',(req,res)=>{
    res.json({code:200,banner})//code:200 是给前端的响应200
})

// 列表接口 localhost:3000/list
app.get('/list',(req,res)=>{
    readList("list.json").then((data)=>{
        res.json({
            code:200,
            list:data
        })
    })
})

// app. 后面 跟着的get post 表示前端发送过来的请求方式
// 参数： 1、是请求路径  必须加 / 