// 定义函数
function fn() {
    console.log("Function 练习")
}

// 调用函数
fn()

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