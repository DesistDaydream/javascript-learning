// 在 Node.js 环境中，可以直接使用模块名称导入模块。
// 同时，需要在 package.json 添加 "type": "module" 以便让 Node.js 环境知道这是一个 ES6 模块，这样才能执行 import 指令。默认使用的是 CommonJS 模块。
// 若使用模块名称导入模块，则 Node.js 环境会自动去 node_modules 目录中查找模块。模块名称就是文件夹名称。
// import {
//     name as name_one
// } from 'module_one'

// 在浏览器环境中，必须使用模块文件的路径导入模块。
// 否则浏览器将会报错：
// Uncaught TypeError: Failed to resolve module specifier "module_one". Relative references must start with either "/", "./", or "../".
// 因为浏览器无法根据模块的名称找到模块文件的路径，所以无法导入模块。
import {
    name as name_one
} from './node_modules/module_one/one.js'

// 通过模块文件导入模块
import {
    name
} from "./node_modules/module_two/two.js"

console.log(name_one)
console.log(name)