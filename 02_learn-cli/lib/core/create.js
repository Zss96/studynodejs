const program = require('commander')
const {createProjectAction,addComponentAction,addPageAndRouteAction,addStoreAction} = require('./actions.js')
const createCommands = ()=>{
  program
    .command('create <project> [others...]')//创建对应指令 项目名称 可选参数
    .description('clone a repository into a folder')//描述
    .action(createProjectAction)//回调函数
  
    program
    .command('addcpn <name>')
    .description('add vue component, 例如: why addcpn HelloWorld [-d src/components]')
    .action((name) => {
      addComponentAction(name, program.dest || 'src/components');
    });
  
  program
    .command('addpage <page>')
    .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
    .action((page) => {
      addPageAndRouteAction(page, program.dest || 'src/pages')
    })

  program
  .command('addstore <store>')
  .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
  .action((store) => {
    addStoreAction(store, program.dest || 'src/store/modules')
  })
}
module.exports = createCommands;