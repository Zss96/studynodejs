const express = require('express');
const userRouter = require('./routers/users');
const productRouter = require('./routers/products');

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(8888, () => {
  console.log("路由服务器启动成功~");
});

