import CryptoJS from "crypto-js"

//AES加密
function encrypt(text) {
  return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    // iv: "0102030405060708",      //偏移向量，如果加密模式是ECB的话，则不需要iv
    mode: CryptoJS.mode.ECB, //加密模式
    padding: CryptoJS.pad.Pkcs7, //填充
  }).toString()
}

//AES解密
function decrypt(text) {
  var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
    // iv: "0102030405060708",       //偏移向量，如果加密模式是ECB的话，则不需要iv
    mode: CryptoJS.mode.ECB, //加密模式
    padding: CryptoJS.pad.Pkcs7, //填充
  })
  return result.toString(CryptoJS.enc.Utf8)
}

var key = "1234567890123456" //秘钥key
var text = "123456" //要加密的字符串
var text_encode = encrypt(text) //加密后的字符串

console.log("加密的字符串为：", decrypt(text_encode)) //打印出解密后的字符串
console.log("加密后的字符串为：", text_encode) //打印出加密后的字符串
