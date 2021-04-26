const message = "hello World";

//创建Buffer
//方式一： 不推荐（过期）
// const buffer = new Buffer(message)

//方式二： 
const buffer = Buffer.from(message)

console.log(buffer)