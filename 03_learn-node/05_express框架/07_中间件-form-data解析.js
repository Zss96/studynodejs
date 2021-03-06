const express = require('express')
const multer = require('multer')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//使用express/multer库  npm i multer
const upload = multer();


app.use(upload.any())
app.post('/login',(req,res,next)=>{
  console.log(req.body)
  res.end('登录成功')
})

app.listen(8888, () => {
  console.log("form-data解析服务器启动成功1~")
});
