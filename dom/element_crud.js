// ########元素的增删改查########
// 创建元素
createdElement = document.createElement("div")
createdElement.innerText = "JS 创建的元素"
console.log(createdElement)

// 获取需要操作元素的元素
var parentElement = document.getElementById("parent_element")
var childElementP1 = document.getElementById("child_element_p1")
var childElementP2 = document.getElementById("child_element_p2")

// 插入元素
// 附加到末尾，将 createdElement 元素插入 parentElement 内
// 并放在最后
append_child_button.onclick = function () {
    parentElement.appendChild(createdElement)
}
// 插入XX之前,将 createdElement 元素插入 parentElement 内
// 并且放在 childElementP2 的前面
insert_bufore_button.onclick = function () {
    parentElement.insertBefore(createdElement, childElementP2)
}

// 删除元素
delete_button.onclick = function () {
    // 两种语法
    // 从 parentElement 中删除 childElementP1 元素
    // parentElement.removeChild(childElementP1)
    // 直接删除 childElementP1 元素
    childElementP1.remove()
}

// 替换元素
replace_child_button.onclick = function () {
    // 将 parentElement 元素中的 childElementP2 元素替换为 createdElement
    parentElement.replaceChild(createdElement, childElementP2)
}

// 克隆元素