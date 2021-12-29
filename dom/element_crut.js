// ########元素的增删改查########
// 创建元素
createdElement = document.createElement("div")
createdElement.innerText = "JS 创建的元素"
console.log(createdElement)
// 插入元素
var parentElement = document.getElementById("parent_element")
parentElement.appendChild(createdElement)
// 删除元素
// 替换元素
// 克隆元素