let obj = `[
    {
        "name": "zhangsan",
        "age": 10
    },
    {
        "name": "lisi",
        "age": 20
    },
    {
        "name": "wangwu",
        "age": 30
    }
]
`
// 获取表格中的 body 元素。即除表头以外的其他行
let tbodyJS = document.getElementById("js")

console.log(tbodyJS)

let jsonObj = JSON.parse(obj)

for (let i = 0; i < jsonObj.length; i++) {
  // 创建 tr 元素，即第一行
  let tr = document.createElement("tr")
  // 创建 td 元素，即每行需要填入的数据
  let tdName = document.createElement("td")
  let tdAge = document.createElement("td")
  // 将数据填入到 td 元素中
  tdName.innerText = jsonObj[i].name
  tdAge.innerText = jsonObj[i].age
  // 将 td 元素嵌套进 tr 元素中
  tr.appendChild(tdName)
  tr.appendChild(tdAge)
  // 将 tr 元素嵌套进 tbody 元素中
  tbodyJS.appendChild(tr)
}
