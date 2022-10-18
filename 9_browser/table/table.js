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
let person = document.getElementById("person")

console.log(person)

let jsonObj = JSON.parse(obj)

for (let i = 0; i < jsonObj.length; i++) {
  let tr = document.createElement("tr")
}
