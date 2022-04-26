// 定义函数
function fn1() {
    console.log("Function 练习")
}

// 调用函数
fn1()

// Function 参数
// JS 里的形参不用指定类型么？~
function paramsFn(message) {
    console.log(message)
}

paramsFn("Function 传参")

// Function 返回值
function returnFn() {
    message = "Function 返回值"
    return message
}

console.log(returnFn())

// 使用递归函数实现输出一个正方形,就是 for.js 样例中的正方形。
function shapeFn(rows, columns) {
    for (var c = 0; c < columns; c++) {
        document.write("* ")
    }
    document.write("</br>")
    if (rows == 1) return 1;
    return shapeFn(rows - 1, columns)
}

// shapeFn(3, 3)


// 箭头函数是函数表达式(匿名函数) 的简写
// 在 ES2015 中，箭头函数是一种更简洁的写法，使用箭头函数可以让函数体更短。
// 在 ES2015 中，箭头函数不能用在 new 命令，因为箭头函数没有 this 和 arguments 对象。
// 在 ES2015 中，箭头函数不能用在 class 内部，因为箭头函数没有 this 和 arguments 对象。
// 在 ES2015 中，箭头函数不能用在 class 外部，因为箭头函数没有 this 和 arguments 对象。
var fn1 = () => {
    console.log("箭头函数")
}

fn1()

// 函数参数默认值
function fn2(a, b = 1) {
    console.log(a, b)
}

fn2(1)