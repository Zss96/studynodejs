const express = require('express')

const app = express();

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";


app.post('/login',(req,res,next)=>{
  const isLogin = true;
  if(isLogin){
    res.json('User Login Sucess')
  }else {
    // res.type(400);
    // res.json("username does not exits")
    // next(new Error("username does not exits"))
    next(new Error(USERNAME_DOES_NOT_EXISTS));
  }
})

app.post('/register', (req, res, next) => {
  // 加入在数据中查询用户名时, 发现不存在
  const isExists = true;
  if (!isExists) {
    res.json("user register success~");
  } else {
    // res.type(400);
    // res.json("username already exists~")
    next(new Error("username already exists~"))
    // next(new Error(USERNAME_ALREADY_EXISTS));
    next(new Error(USERNAME_ALREADY_EXISTS));
  }
});

//错误的中间件
app.use((err, req, res, next) => {
  let status = 400;
  let message = "";
  console.log(err.message);
  switch(err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = "username does not exists~";
      break;
    case USERNAME_ALREADY_EXISTS:
      message = "USERNAME_ALREADY_EXISTS~"
      break;
    default: 
      message = "NOT FOUND~"
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessage: message
  })
})
app.listen(8008, () => {
  console.log("路由服务器启动成功~");
});
