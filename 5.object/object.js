// 声明
var objectType = {}

// 1.赋值
// 在 Javascript 中，可以对空对象赋值，赋值的同时，空对象会自动添加属性
// 使用 `.` 赋值
objectType.key_1 = "Hello"
console.log("对象赋值:\n", objectType)

// 使用 `[]` 赋值。这种语法可以在 `[]` 中使用字符串类型的变量，所以不使用变量时，需要添加引号，以表示属性名
objectType["key_2"] = "World"
console.log("对象赋值:\n", objectType)

// 2.引用
console.log("对象引用:\n", objectType.key_1)
console.log("对象引用:\n", objectType["key_2"])

// 3.修改
// 与赋值语法一样
objectType.key_1 = "Hello_change"
objectType["key_2"] = "World_change"
console.log("对象修改:\n", objectType)


// 4.删除
delete objectType["key_1"]
delete objectType.key_2
console.log("对象删除:\n", objectType)