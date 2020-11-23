#!/usr/bin/env node
const program = require('commander')

const helpOtions = require('./lib/core/help')
const createCommands = require('./lib/core/create')
program.version(require('./package.json').version,'-v,--version')

//帮助和可选信息
helpOtions()
createCommands()

program.parse(process.argv)
// console.log(program.dest)