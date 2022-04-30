function VarKeyword() {
    // 声明一个变量，并为其赋值
    var num = 100

    // 引用变量
    // 在控制台输出 num 变量的值
    console.log(num)

    // 预解析，使用 var 关键字声明的变量在调用之前就会被解析，输出 undefined
    console.log(varHoisting)
    var varHoisting = "Variables Hoisting Test"
}

// ES6 中的 let 关键字
function LetKeyword() {
    if (true) {
        // ES2015 引入了 let 与 const 关键字用于声明变量。加入了一些限制行为
        // 不可以预解析，声明之前调用将会报错
        // console.log(num)
        // 不可以声明变量名相同的变量
        // let num = 200
        let num = 100
        console.log(num)
    }
    // 不可以调用其他作用域声明的变量。let 声明的变量具有块级作用域的效果，只能在声明的块级作用域内被访问
    // num 变量在 if 中声明，外部无法访问
    // console.log(num) // 报错，提示变量未被定义

}

/*
var 会进行预解析，let 与 const 不会
var 可以声明两个重名的变量，let 与 const 不可以
var 没有块级作用域，let 和 const 有

let 定义变量时可以不进行赋值，const 定义常量时必须赋值
let 定义的变量可以被修改，const 定义的是常量，不可以被修改
*/

VarKeyword()

LetKeyword()