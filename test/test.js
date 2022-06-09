var stringType = "Hello_World"
var stringObjType = new String("Hello_World")

console.log("基本字符串的类型:", typeof stringType)
console.log("字符串对象的类型:", typeof stringObjType)

console.log(stringObjType.valueOf())

console.log(stringType)
console.log(stringObjType)

var selectSort = [9, 6, 3, 1, 2, 4, 5, 7, 8, 0]

const arrayObject = new Array(9, 6, 3, 1, 2, 4, 5, 7, 8, 0)

arrayObject.sort()

console.log(arrayObject)
