const express = require('express');

const app = express();

app.use(express.static('./build'));

app.listen(8008, () => {
  console.log("路由服务器启动成功~");
});
