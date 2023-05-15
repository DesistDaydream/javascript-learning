//
var intervalMs = 1000
var timeoutMs = 3000

// 间隔定时器
var intervalTimer = setInterval(function () {
  console.log("每隔", intervalMs, "毫秒执行一次")
}, intervalMs)

// 延时定时器
var timeoutTimer = setTimeout(function () {
  console.log(timeoutMs, "毫秒后执行")
}, timeoutMs)

console.log("第一个定时器的返回值:", intervalTimer)
console.log("第二个定时器的返回值:", timeoutTimer)

closeTimer.onclick = function () {
  // 通过定时器的返回值，我们可以关闭定时器
  // clearInterval() 与 clearTimeout() 的效果一样，可以互相使用
  clearInterval(timeoutTimer)
  clearTimeout(intervalTimer)
}
