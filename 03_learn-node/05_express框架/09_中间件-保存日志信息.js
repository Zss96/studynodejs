const express = require('express')
const morgan = require('morgan');
const fs = require('fs')

//npm i morgan

const app = express();

const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: "a+"
})
app.use(morgan('combined', {stream: writerStream}))//所有日志


app.get('/home', (req, res, next) => {
  res.end("Hello World");
})
app.listen(8888,()=>{
  console.log("express初体验服务器启动成功")
})