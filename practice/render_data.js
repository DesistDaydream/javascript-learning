var users = [{
        id: 1,
        name: "DesistDaydream",
        age: 18
    },
    {
        id: 2,
        name: "GitHub",
        age: 188
    },
    {
        id: 3,
        name: "JavaScript",
        age: 8
    }
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

        // 把 td 插入到 tr 内部
        tr.appendChild(td)
    }

    tbody.appendChild(tr)
})