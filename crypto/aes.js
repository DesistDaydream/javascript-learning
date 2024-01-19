// https://blog.51cto.com/u_12632800/5192084
import CryptoJS from "crypto-js"

//AES加密
function encrypt(message, key) {
  let aesKey = CryptoJS.enc.Utf8.parse(key)
  let cipherOption = {
    // iv: "0102030405060708",   //偏移向量，如果加密模式是ECB的话，则不需要iv
    mode: CryptoJS.mode.ECB,     //加密模式
    padding: CryptoJS.pad.Pkcs7, //填充
  }

  let result = CryptoJS.AES.encrypt(message, aesKey, cipherOption)

  return result.toString()
}

//AES解密
function decrypt(ciphertext, key) {
  let aesKey = CryptoJS.enc.Utf8.parse(key)
  let cipherOption = {
    // iv: "0102030405060708",      //偏移向量，如果加密模式是ECB的话，则不需要iv
    mode: CryptoJS.mode.ECB,     //加密模式
    padding: CryptoJS.pad.Pkcs7, //填充
  }

  let result = CryptoJS.AES.decrypt(ciphertext, aesKey, cipherOption)

  return result.toString(CryptoJS.enc.Utf8)
}

let key = "1234567890123456" //秘钥key
let text = "DesistDaydream" //要加密的字符串
let text_encode = encrypt(text, key) //加密后的字符串

console.log("加密的字符串为: ", decrypt(text_encode, key)) //打印出解密后的字符串
console.log("加密后的字符串为: ", text_encode) //打印出加密后的字符串
