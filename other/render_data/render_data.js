var users = [
  {
    id: 1,
    name: "DesistDaydream",
    age: 18,
  },
  {
    id: 2,
    name: "GitHub",
    age: 188,
  },
  {
    id: 3,
    name: "JavaScript",
    age: 8,
  },
]

var tbody = document.querySelector("tbody")

users.forEach(function (item) {
  // 为每个对象创建一个 tr 标签
  var tr = document.createElement("tr")

  // 循环 users 中的每一个元素
  for (var key in item) {
    // 创建 td 标签
    var td = document.createElement("td")
    td.innerHTML = item[key]

    // 把 td 插入到 tr
    tr.appendChild(td)
  }

  tbody.appendChild(tr)

  // 注意，这个练习其实不太好，当我们将 user 中其中一个元素的 id、name、age 中任意两个上下颠倒一下，则对应的数据就乱了，最好的是将 Object 中的 key 与 HTML 中表格的表头关联起来
})
