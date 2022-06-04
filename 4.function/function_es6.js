// 箭头函数是函数表达式(匿名函数) 的简写
// 在 ES6 中，箭头函数是一种更简洁的写法，使用箭头函数可以让函数体更短。
// 在 ES6 中，箭头函数不能用在 new 命令，因为箭头函数没有 this 和 arguments 对象。
// 在 ES6 中，箭头函数不能用在 class 内部，因为箭头函数没有 this 和 arguments 对象。
// 在 ES6 中，箭头函数不能用在 class 外部，因为箭头函数没有 this 和 arguments 对象。
function ArrowFunction() {
    var f1 = v => v
    // 等同于
    var f1_1 = function (v) {
        return v
    }



    // 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
    var f2 = () => 5;
    // 等同于
    var f2_1 = function () {
        return 5
    };

    var f3 = (num1, num2) => num1 + num2;
    // 等同于
    var f3_1 = function (num1, num2) {
        return num1 + num2;
    };

    // 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
    var f4 = (num1, num2) => {
        console.log("箭头函数")
        return num1 + num2;
    }
    // 等同于
    var f4_1 = function (num1, num2) {
        return num1 + num2;
    }

    console.log(f4(1, 2))
    console.log(f4_1(1, 2))
}

// 函数参数默认值
function DefaultParameterValue(a, b = 1) {
    console.log(a, b)
}

ArrowFunction()
// DefaultParameterValue(1)