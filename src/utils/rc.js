import { RC, DEFAULTS } from "./constants";
import { promisify } from 'util'
import { decode, encode } from "ini";
import chalk from 'chalk'
import fs from 'fs'

const exist = promisify(fs.existsSync);
const readfile = promisify(fs.readFile);
const writefile = promisify(fs.writeFile)

export const get = async (key) => {
    const exit = await exist(RC);
    let opts;
    if(exist){
        opts = await readfile(RC, 'utf-8');
        opts = decode(opts);
        return opts[key]
    }
    return ''
}

// 读取配置文件中的参数
export const getAll = async () => {
    const exit = await exist(RC);
    let opts;
    if(exist){
        opts = await readfile(RC, 'utf-8');
        opts = decode(opts);
        return opts
    }
    return {}
}

export const set = async (key, value) => {
    const exit = await exist(RC);
    let opts;
    if(exist){
        opts = await readfile(RC, 'utf-8');
        opts = decode(opts);
        if(!key) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red(' key is required'))
            return;
        }
        if(!value) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red(' value is required'))
            return;
        }
        Object.assign(opts, { [key]: value })
    } else {
        opts = Object.assign({}, {[key] : value});
    }
    await writefile(RC, encode(opts), 'utf-8');
}

export const remove = async (key) => {
    const exit = await exist(RC);
    let opts;
    if(exist){
        opts = await readfile(RC, 'utf-8');
        opts = decode(opts);
        delete opts[key];
        await writefile(RC, encode(opts), 'utf-8');
        
    }
}