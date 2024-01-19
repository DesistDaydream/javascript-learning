// import CryptoJS from "crypto-js"
import CryptoJS from "crypto-js"


// DES 加密
const encryptByDES = function (message, key) {
    let desKey = CryptoJS.enc.Utf8.parse(key)
    let cfgIv = CryptoJS.enc.Utf8.parse("Og4ZqJ79")
    let cfg = {
        iv: cfgIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }

    let result = CryptoJS.TripleDES.encrypt(message, desKey, cfg)

    return result.toString()
}

let key = "yL4t6rgwukUyt5wUae0xcuB4"
let message = "CNMD_" + Math.floor(new Date().getTime() / 1000)

let encryptResult = encryptByDES(message, key)

console.log("加密后的字符串为: ", encryptResult) //打印出加密后的字符串
