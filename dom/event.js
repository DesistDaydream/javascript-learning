// 事件绑定
// 事件源.on事件类型=事件处理函数
var divElement = document.getElementById("event")
var obj = {}
var a = new String("string")
var b = [1, 2, "abc"]
console.log(typeof divElement)
console.log(divElement, obj, a)
console.log(b)


// click 点击事件
divElement.onclick = function () {
    console.log(divElement, "元素，被点击了一下")
}