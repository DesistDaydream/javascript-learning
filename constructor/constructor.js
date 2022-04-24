// 创建一个构造函数，类似于创建一个面向对象概念中的对象
// function Person(name, age) {
//     // 若没有 this 关键字，则这俩不会变为 Person 的属性，仅仅只是一个赋值操作
//     this.name = name;
//     this.age = age;
// }

// 使用 ES6 的新语法创建一个对象模板，而不是使用一个意义不够明确的构造函数
class Person {
    // 定义一个方法，这个方法会在使用 new() 生成对象时自动调用，类似于 Python 的 class 中的 __init__ 方法
    // 一个 class 中必须包含一个 constructor() 方法，用来定义该 class 的属性。若没有显式定义，则会自动创建一个
    constructor(name, age) {
        // 若没有 this 关键字，则这俩不会变为 Person 的属性，仅仅只是一个赋值操作
        this.name = name;
        this.age = age;
    }

    // 输出该对象的信息
    showInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

// 使用 new() 实例化一个对象
var person1 = new Person('张三', 20)
console.log(person1.showInfo())

// 使用 new() 实例化另一个对象
var person2 = new Person('李四', 30)
console.log(person2)