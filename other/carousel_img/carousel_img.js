var imgs = document.querySelectorAll("ul > li")
var points = document.querySelectorAll("ol > li")
// div 下的 banner，简写为 .banner
var banner = document.querySelector(".banner")

index = 0

// 切换到相邻的图片
function changeOneImg(params) {
  // 让当前图片隐藏
  imgs[index].classList.remove("active")
  points[index].classList.remove("active")

  switch (params) {
    // 左箭头
    case "left":
      index--
      break
    // 右箭头
    case "right":
      index++
      break
    // params 是数字，则说明点击的是焦点内的按钮，直接切换到指定的图片
    default:
      index = params
      break
  }

  // 判断是否超出边界
  // 如果超出边界，则让图片回到最后一张
  if (index < 0) {
    index = imgs.length - 1
  }
  // 如果超出边界，则让图片回到第一张
  if (index > imgs.length - 1) {
    index = 0
  }

  // 让其他图片显示
  imgs[index].classList.add("active")
  points[index].classList.add("active")
}

// 绑定点击事件
banner.onclick = function (e) {
  // 判断点击的是哪个按钮
  switch (e.target.className) {
    case "left":
      // 触发切换图片
      changeOneImg(e.target.className)
      break
    case "right":
      // 触发切换图片
      changeOneImg(e.target.className)
      break
    default:
      break
  }
  if (e.target.dataset.name == "point") {
    // 触发切换显示的图片
    changeOneImg(e.target.dataset.i)
  }
}

// 自动轮播
var timer = setInterval(function () {
  changeOneImg("right")
}, 5000)
