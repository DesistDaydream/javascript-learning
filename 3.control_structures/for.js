// for 基础语法
function forBasic() {
  // for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  // }

  for (var index = 1; index <= 100; index++) {
    // 输出 1 到 100 中，12 的倍数。
    if (index % 12 == 0) {
      console.log("for 样例", index)
    }
  }
}

// forin语法
function forin() {
  // 注意：for...in 不推荐用于遍历一个 Array 类型的对象，常用来遍历一个普通的 Object 类型的对象
  var obj = {
    a: 1,
    b: 2,
    c: 3,
  }

  for (var key in obj) {
    console.log("obj." + key + " = " + obj[key])
  }
  // 如果是一个 Array 类型的对象，则 key 变量就是元素的索引，所以遍历 Array 更推荐使用 Array 的 forEach() 方法
}

// ########简单的练习########
// 9 * 9 乘法表
function timesTable() {
  for (var rows = 1; rows <= 9; rows++) {
    for (var columns = 1; columns <= rows; columns++) {
      document.write(columns + " * " + rows + "=" + columns * rows + " ")
    }
    document.write("</br>")
  }
}

// 一个正方形
function square() {
  for (var rows = 0; rows < 9; rows++) {
    for (var columns = 0; columns < 9; columns++) {
      document.write("* ")
    }
    document.write("</br>")
  }
}

// 一个三角形
function triangle() {
  for (var rows = 0; rows < 9; rows++) {
    for (var columns = 0; columns < rows; columns++) {
      document.write("* ")
    }
    document.write("</br>")
  }
}

function main() {
  // forBasic()
  forin()
  // timesTable()
  // square()
  // triangle()
}

main()
