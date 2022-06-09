// 定义函数
function ArrowFunction() {
  console.log("Function 练习")
}

// 调用函数
ArrowFunction()

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
  if (rows == 1) return 1
  return shapeFn(rows - 1, columns)
}

// shapeFn(3, 3)
