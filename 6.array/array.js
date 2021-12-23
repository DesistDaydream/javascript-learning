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

// BubbleSort(冒泡排序)
// 循环比较两个相邻元素，将数值较大的元素，向后移动一位
var bubbleSort = [9, 6, 3, 1, 2, 4, 5, 7, 8, 0]

for (var num = 0; num < bubbleSort.length - 1; num++) {
    for (var index = 0; index < bubbleSort.length - 1 - num; index++) {
        if (bubbleSort[index] > bubbleSort[index + 1]) {
            var temp = bubbleSort[index]
            bubbleSort[index] = bubbleSort[index + 1]
            bubbleSort[index + 1] = temp
        }
    }
}

console.log(bubbleSort)

// SelectSort(选择排序)
// 循环比较所有未排序的元素，获取数值最小元素的索引号，将该元素移动到尚未排序的元素的最前面(即修改元素的索引号为尚未排序的元素的最小索引号)
var selectSort = [9, 6, 3, 1, 2, 4, 5, 7, 8, 0]
// 进行 数组长度 - 1 次比较。每次比较都会将最小的元素，放在最前面
for (var num = 0; num < selectSort.length - 1; num++) {
    // 假设最小数字的索引是当前排序的轮次
    var minIndex = num
    // 循环判断，以获取每个还没有排序过的元素中，数值最小元素的索引号
    for (var index = num + 1; index < selectSort.length; index++) {
        if (selectSort[index] < selectSort[minIndex]) {
            minIndex = index
        }
    }
    // 将最小索引的元素换到最前面
    var temp = selectSort[num]
    selectSort[num] = selectSort[minIndex]
    selectSort[minIndex] = temp
}

console.log(selectSort)

// Javascript 提供了很多方法，可以操作数组
// 比如 forEach() 可以遍历数组
arrayType.forEach(function (item, index) {
    console.log("索引:", index, "元素:", item)
});