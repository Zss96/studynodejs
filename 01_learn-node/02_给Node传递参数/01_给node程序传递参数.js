console.log(process.argv[2])
console.log(process.argv[3])

//node index zss age=18
process.argv.forEach(item => {
  console.log(item)
})