// switch (Condition) {
//     case Value1:
//         ...
//     case Value2:
//         ...
//     ...
//     default:
//         ...
// }

var foot = 1

switch (foot) {
  // switch 根据条件判断是否为真，case 中第一个为真的，开始执行其中定义的语句
  case 37:
    console.log("37号")
    // 添加了 break 后，执行完本条件的语句后就会退出 switch
    break
  case 40:
    console.log("40号")
  // 不添加 break 的话，当 switch 第一次匹配到 case 并执行完成后，不管下一个条件是否匹配，还会继续执行。
  // 这称为 switch 的穿透效果，从第一个满足条件的 case 开始向下穿透直到遇上退出 switch 的语句
  default:
    console.log("默认条件")
    break
}
