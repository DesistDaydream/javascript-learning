// 数值类型
var numberType = 2e5
console.log(numberType)


// 字符串类型
var stringType = "string"
console.log(stringType)

// 布尔类型
var booleanType = true
console.log(booleanType)

// 空类型
// null # 有值，但是该值表示为空值
// undefined # 没有值
var nullType = null
var undefinedType
console.log(nullType)
console.log(undefinedType)

// 函数类型
function functiomType() {}
console.log(functiomType)

// 对象类型
var objectType = {}
console.log(objectType)

// 数组类型
var arrayType = []
console.log(arrayType)

// 数据类型检测
console.log("检测数值变量的数据类型：", typeof numberType)
console.log("检测字符串变量的数据类型：", typeof stringType)
console.log("检测布尔变量的数据类型：", typeof booleanType)
// 这个 null 的数据类型是 object
console.log("检测布尔变量的数据类型：", typeof nullType)
console.log("检测布尔变量的数据类型：", typeof undefinedType)
console.log("检测函数的数据类型：", typeof functiomType)
console.log("检测对象变量的数据类型：", typeof objectType)
console.log("检测数组变量的数据类型：", typeof arrayType)