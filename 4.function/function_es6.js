// 箭头函数是函数表达式(匿名函数) 的简写
// 在 ES6 中，箭头函数是一种更简洁的写法，使用箭头函数可以让函数体更短。
// 在 ES6 中，箭头函数不能用在 new 命令，因为箭头函数没有 this 和 arguments 对象。
// 在 ES6 中，箭头函数不能用在 class 内部，因为箭头函数没有 this 和 arguments 对象。
// 在 ES6 中，箭头函数不能用在 class 外部，因为箭头函数没有 this 和 arguments 对象。
var fn1 = () => {
    console.log("箭头函数")
}

ArrowFunction()

// 函数参数默认值
function DefaultParameterValue(a, b = 1) {
    console.log(a, b)
}

DefaultParameterValue(1)