const express = require('express')

const app = express();

app.get('/product/:id',(req,res,next)=>{
  console.log(req.param)

  res.end('商品的详情,')
})

app.get('/login',(req,res,next)=>{
  console.log(req.query);
  res.end("用户登录成功~");
})
app.listen(8888,()=>{
  console.log('服务器启动')
})