// 使用 ES6 的新语法创建一个对象模板，而不是使用一个容易产生歧义的构造函数。
// 这种写法类似于一个语法糖，让 JS 中面向对象的代码写法与传统面向对象的写法类似
class Person {
    // 定义一个方法，这个方法会在使用 new() 生成对象时自动调用，类似于 Python 中 class 的 __init__ 方法
    // 一个 class 中必须包含一个 constructor() 方法，用来定义该 class 的属性。若没有显式定义，则会自动创建一个
    constructor(name, age) {
        // 若没有 this 关键字，则这俩不会变为 Person 的属性，仅仅只是一个赋值操作，类似于 Python 中 class 的 self 关键字
        this.name = name
        this.age = age
    }

    // Person 的方法，名为 showInfo
    showInfo() {
        return this.name + " is " + this.age + " years old."
    }

    // 静态属性??这个会报错 SyntaxError: Unexpected token =
    // static a = 1
    // 静态方法
    static getInfo() {
        console.log("This is a static method.")
    }
}

// 使用 new 实例化一个对象
var person1 = new Person('张三', 20)
console.log(person1.showInfo())

// 使用 new 实例化另一个对象
var person2 = new Person('李四', 30)
console.log(person2)

// 调用静态方法
Person.getInfo()