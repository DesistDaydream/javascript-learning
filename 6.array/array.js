// 声明
var arrayType = [100, true, "Hello World", "DesistDaydream", {
    Key1: "Value_1"
}]

console.log(arrayType)

// 数组长度
console.log(arrayType.length)

// 设置数组长度
arrayType.length = 4
// 若设置的长度小于当前数组长度，则数组中超出长度的元素将会被删除
console.log(arrayType)

// 设置数组中元素的值
arrayType[1] = "New"

// 引用数组中的元素
console.log(arrayType[1])

// 遍历数组
for (var index = 0; index < arrayType.length; index++) {
    console.log("索引:", index, "; 元素:", arrayType[index])
}