// if () {...}
// if () {...} else {...}
// if () {...} else if () {...}
// if () {...} else if () {...} else {...}
var year = 2021
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " 是闰年")
} else {
  console.log(year + " 不是闰年")
}
