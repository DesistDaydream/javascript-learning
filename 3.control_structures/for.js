// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (var index = 1; index <= 100; index++) {
    // 输出 1 到 100 中，12 的倍数。
    if (index % 12 == 0) {
        console.log("for 样例", index)
    }
}

// 一个正方形
for (var rows = 0; rows < 9; rows++) {
    for (var columns = 0; columns < 9; columns++) {
        document.write("* ")    
    }
    document.write("</br>")
}

// 一个三角形
for (var rows = 0; rows < 9; rows++) {
    for (var columns = 0; columns < rows; columns++) {
        document.write("* ")    
    }
    document.write("</br>")
}

// 9 * 9 乘法表
for (var rows = 1; rows <= 9; rows++) {
    for (var columns = 1; columns <= rows; columns++) {
        document.write(columns + " * " + rows + "=" + columns * rows + " ")    
    }
    document.write("</br>")
}