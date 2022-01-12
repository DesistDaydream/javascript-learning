var numberObjectType = new Number(2e5)
console.log(numberObjectType)

var stringObjectType = new String("这是一个字符串对象");
console.log(stringObjectType)

var booleanObjectType = new Boolean(true)
console.log(booleanObjectType)


// 数据类型检测
console.log("检测数值变量的数据类型：", typeof numberObjectType)
console.log("检测字符串变量的数据类型：", typeof stringObjectType)
console.log("检测布尔变量的数据类型：", typeof booleanObjectType)