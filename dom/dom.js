// 根据 ID 获取元素
// 若没有这个 ID，则返回值为 null
var elementById = document.getElementById("container")
console.log(elementById)

// 根据类名获取元素
// 这个方法的参数是一个匹配规则，凡是包含参数中的字符串的类名都会获取到
// 返回值是一个 HTMLCollection 类型的对象
var elementsByClassName = document.getElementsByClassName("box")
console.log(elementsByClassName)

// 根据标签获取元素
// 返回值是一个 HTMLCollection 类型的对象
var elementsByTagName = document.getElementsByTagName("div")
console.log(elementsByTagName)

// 根据选择器获取元素
// 只返回选择器匹配到的第一个元素
var elementsQuerySelector = document.querySelector("div")
console.log(elementsQuerySelector)