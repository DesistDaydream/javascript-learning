// ####根据 ID 获取元素####
// 若没有这个 ID，则返回值为 null
var elementById = document.getElementById("container")
console.log("根据ID获取到的元素:\n", elementById)

// ####根据类名获取元素####
// 这个方法的参数是一个匹配规则，凡是包含参数中的字符串的类名都会获取到
// 返回值是一个 HTMLCollection 类型的对象
var elementsByClassName = document.getElementsByClassName("box")
console.log("根据类名获取到的元素:\n", elementsByClassName)

// ####根据标签获取元素####
// 返回值是一个 HTMLCollection 类型的对象
var elementsByTagName = document.getElementsByTagName("div")
console.log("根据标签获取到的元素:\n", elementsByTagName)

// ####根据选择器获取元素####
// 返回选择器匹配到的第一个元素
var elementQuerySelector = document.querySelector("div")
console.log("根据选择器获取匹配到的第一个元素:\n", elementQuerySelector)
// 返回选择器匹配到的所有元素
// 返回值是一个 NodeList 类型的对象
var elementsQuerySelector = document.querySelectorAll("div")
console.log("根据选择器获取匹配到的所有元素:\n", elementsQuerySelector)

// ####操作元素的文本与超文本内容####
// 获取页面中的元素
var needChangeText = document.getElementById("text")
var needChangeHyperText = document.getElementById("hyper_text")
// 除了 bom 中介绍的，在 javascript 中通过按钮的 id 引用按钮对象，还可以通过选择器获取按钮对象
var buttonObject = document.querySelector("button")
// 获取元素中的文本内容
console.log("元素中的文本内容为:\n", needChangeText.innerText)
// 获取元素中的超文本内容
console.log("元素中的超文本内容:\n", needChangeHyperText.innerHTML)

buttonObject.onclick = function () {
    // 设置元素中的文本内容
    needChangeText.innerText = "新文本"
    // 设置元素中的超文本内容
    needChangeHyperText.innerHTML = "<span>新超文本</span>"
}

// ####操作元素的属性####
// 获取页面中的元素
var box = document.getElementById("attribute_value")
var inp = document.querySelector("input")
console.log(box, inp)