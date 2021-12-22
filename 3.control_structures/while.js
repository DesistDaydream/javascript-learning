// while (Condition) {
//     ...
// }
var n = 1
while (n <= 3) {
    console.log("循环次数",n)
    n++
}

// do {
//     ...
// } while (Condition)
// 这种模式可以用来进行强制判断，比如使用 prompt 弹出提示框，只有输入正确，才会继续显示页面；否则一直弹出提示框。
do {
    var result = prompt("确认")
} while (result != "yes")