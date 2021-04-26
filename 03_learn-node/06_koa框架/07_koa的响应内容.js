const Koa = require('koa');

const app = new Koa();

app.use((ctx,next) => {
    //设置状态码
    // ctx.response.status = 200
  //
  // ctx.response.body = "Hello world"
  // ctx.response.body = {
  //   name: 'codewhy',
  //   age: '18'
  // }

  // ctx.response.body=["abc",'bca']


  ctx.status = 200
  ctx.body= "hello Koa"

})

app.listen(8008, ()=>{
  console.log('koa初体验服务器启动成功~')
})