console.log("数据类型转换:")

var s1 = '100.10abc200'
var b1 = true

// 将指定内容转换为数值类型
// 由于字符串中带有非数字字符，所以 n1 的值为 NaN，即 Not a Number
console.log("Number() 函数转换:", Number(s1))
console.log("转换后数据类型:", typeof Number(s1))


// 虽然字符串中带走非数字字符，但是会自动舍弃无法转换为数值类型的字符，所以 n2 的值为 100
console.log("parseInt() 函数转换:", parseInt(s1))
console.log("转换后数据类型:", typeof parseInt(s1))

// 解析规则与 parseInt() 一样，只不过 parseFloat() 还可以解析一个字符串中的小数部分，所以 n3 的值为 100.1
console.log("parseFloat() 函数转换:", parseFloat(s1))
console.log("转换后数据类型:", typeof parseFloat(s1))

// 注意：parseInt() 与 parseFloat() 转换时，被解析的字符串的第一个字符必须是数字才可以，否则，与 Number() 一样，最后结果都是 NaN

// 将指定内容转换为字符串类型
console.log("String() 函数转换:", String(b1))
console.log("转换后数据类型:", typeof String(b1))

s3 = b1.toString()
console.log("String() 函数转换:", s3)
console.log("转换后数据类型:", typeof s3)


// 将指定内容转换为布尔类型
// 除了 0、NaN、空字符串、undefined、null 这些内容会被转换为 false 以外，其他的内容转换后都是 true
console.log("Boolean() 函数转换:", Boolean(s1))
console.log("转换后数据类型:", typeof Boolean(s1))
console.log("Boolean() 函数转换:", Boolean(0))
console.log("Boolean() 函数转换:", Boolean(NaN))
console.log("Boolean() 函数转换:", Boolean(""))
console.log("Boolean() 函数转换:", Boolean(undefined))
console.log("Boolean() 函数转换:", Boolean(null))