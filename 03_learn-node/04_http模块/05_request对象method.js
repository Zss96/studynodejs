const http = require('http');
const url = require('url');
const qs = require('querystring')

//创建一个web服务器
const server = http.createServer((req,res)=>{
  const { pathname, query } = url.parse(req.url);
  if (pathname === '/login') {
    if (req.method === 'POST') {
      console.log(req.method)
      //拿到body中的数据
      req.setEncoding('utf-8')
      req.on('data',data=>{
        // console.log(data.toString())
        //console.log(data)//字符串
        const {username, password} = JSON.parse(data);
        console.log(username, password);
      })
      res.end("请求结果");
    }
  }
  
})

server.listen(8888,'0.0.0.0',()=>{
  console.log('服务器启动成功')
})