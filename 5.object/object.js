function BasicObject() {
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
}

// 解构赋值
function DeconstructObject() {
  let obj = {
    name: "张三",
    age: 18,
  }

  // 解构赋值。大括号内的字符 name 相当于是想从 obj 中获取 name 的值，并赋值给 nameAlias
  let { name: nameAlias, age } = obj

  console.log("解构赋值:\n", nameAlias, age)
}

// 展开对象
function Expand() {
  let obj = {
    name: "张三",
    age: 18,
  }

  // 展开对象。将 obj 中的属性值展开到当前对象中
  let obj2 = {
    gender: "男",
    ...obj,
  }

  console.log(obj2)
}

// BasicObject()
// DeconstructObject()
Expand()
