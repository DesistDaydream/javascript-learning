// 创建一个 Constructor(构造函数)，类似于创建一个面向对象概念中的对象
function Person(name, age) {
  // 若没有 this 关键字，则这俩不会变为 Person 的属性，仅仅只是一个赋值操作
  this.name = name
  this.age = age
}

// Person 的方法，名为 showInfo
// 由于 JS 是通过构造函数与原型实现的面向对象编程，所以方法要定义在 prototype 上
Person.prototype.showInfo = function () {
  return this.name + " is " + this.age + " years old."
}

// 原型链
// 实例 person1 的 __proto__ 指向 Person.prototype，而 Person.prototype 的 __proto__ 指向 Object.prototype
// Object.prototype 的 __proto__ 指向 null
//
// Person.__proto__ 指向 Function.prototype，而 Function.prototype 的 __proto__ 指向 Object.prototype
console.log(person1.__proto__.__proto__.__proto__)
console.log(Function.prototype.__proto__.__proto__)
