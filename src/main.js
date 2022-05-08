import { program } from "commander";
import { VERSION } from './utils/constants.js'
import apply from './index'
// chalk包必须通过ESModule来导入
import chalk from "chalk";

let actionMap = {
    init : {
        description : 'init a new program from a template',
        usages : [
            'sub init templateName projectName'
        ]
    },
    config : {
        alias: 'cfg',
        description: 'config .subrc',
        usages : [
            'sub config set <k> <v>',
            'sub config get <k>',
            'sub config remove <k>'
        ]
    }
}

// 引入响应命令对应的函数，并传入参数调用
Object.keys(actionMap).forEach((cmd) => {
    program.command(cmd)
    .description(actionMap[cmd].description)
    .action(() => {
        switch (cmd) {
            case 'config' :
                apply(cmd, ...process.argv.slice(3))
                break;
            case 'init':
                apply(cmd, ...process.argv.slice(3))
                break;
            default : 
                break;
        }
    })
})

program.usage('<command> [options]')
program.version(VERSION, '-v --version')
program.parse(process.argv)

// if(!process.argv.slice(2).length) {
//     program.outputHelp(chalk.green)
// }

