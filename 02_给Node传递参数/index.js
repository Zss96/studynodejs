console.log(process.argv[2])
console.log(process.argv[3])

console.clear();//清空控制台

process.argv.forEach(item => {
  console.log(item)
})

// console.trace();//跟踪


function foo() {
  bar();
}
function bar () {
  console.trace();
}

foo()