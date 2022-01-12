// 事件绑定
// 事件源.on事件类型=事件处理函数
var divElement = document.getElementById("event")

// click 触发一个点击事件
divElement.onclick = function (prop) {
    console.log(divElement, "元素，被点击了一下")
    // 事件的属性
    // 想要获取事件的属性，只需要为事件处理函数添加一个参数即可，这个参数就是事件属性的变量。
    console.log(prop)
}