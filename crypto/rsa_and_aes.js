// modified based on [node.js AES/ECB/PKCS5Padding 与其他语言的加密解密通用](http://yijiebuyi.com/blog/13e2ae33082ac12ba4946b033be04bb5.html)
import crypto from "node:crypto"
import { Buffer } from "node:buffer"

// AES 加密/解密
class AESCrypto {
  /**
   * 加解密必须使用同一套 key 和 iv
   * @param  {String} algorithm 算法名称，比如 `aes-128-ecb`
   * @param  {String} key       秘钥
   * @param  {String} iv        initialization vector，默认空字符串. ecb 模式不需要提供 iv
   */
  constructor(algorithm, key, iv = "") {
    this.algorithm = algorithm
    this.key = key
    this.iv = iv
  }

  /**
   * 加密算法
   *
   * @param  {String} message         明文. i.e. 需要加密的数据
   * @param  {String} messageEncoding 明文编码 utf8, etc.
   * @param  {String} cipherEncoding  密文编码 base64, hex, etc.
   *
   * @return {String} encrypted       密文
   */
  encrypt(message, messageEncoding = "utf8", cipherEncoding = "base64") {
    // 使用加密配置信息实例化一个 Cipher 对象
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv)
    cipher.setAutoPadding(true) // 默认值就是 true，可写可不写

    // 加密数据
    // 将数据从 messageEncoding 编码转为 cipherEncoding 编码
    let encrypted = cipher.update(message, messageEncoding, cipherEncoding)
    // 结束加密并返回剩余的加密内容
    encrypted += cipher.final(cipherEncoding)

    return encrypted
  }

  /**
   * 解密算法
   *
   * @param  {String} encrypted       密文
   * @param  {String} cipherEncoding  密文编码
   * @param  {String} messageEncoding 明文编码
   *
   * @return {String} decrypted       明文
   */
  decrypt(encrypted, cipherEncoding = "base64", messageEncoding = "utf8") {
    // 使用加密配置信息实例化一个 Decipher 对象
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
    decipher.setAutoPadding(true) // 默认值就是 true，可写可不写

    // 解密数据
    // 将数据从 cipherEncoding 编码转换为 messageEncoding 编码
    let decrypted = decipher.update(encrypted, cipherEncoding, messageEncoding)
    // 结束解密并返回剩余的解密内容
    decrypted += decipher.final(messageEncoding)

    return decrypted
  }
}

// ######## RSA 使用公钥加密逻辑 ########
const encryptWithPublicKey = function (toEncrypt) {
  var publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBg
QCkLMhnY5tb9T0KMqq4It/yK7Mv
4jQt39RyrH9yqPcAg0lsFWKTXJdT0/c0P+yX
R1aF2xLOZhl3NA8eZWEF2YoCBJg6
h6QJ6dlMak8r2LDC89QJfq1ZlcA6qfiHzZk
fUbtGqXj3RbzfvKyGUdQHvXp9P/1C
ECZfetRusF4IncOklwIDAQAB
-----END PUBLIC KEY-----`

  var rsaKey = {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PADDING,
  }
  var buffer = Buffer.from(toEncrypt, "utf8")
  var encrypted = crypto.publicEncrypt(rsaKey, buffer)
  return encrypted.toString("base64")
}

let key = "QCBY{Ru4~Y7}c,7H"
// let key = "1234567890123456"
let encryptedKey = encryptWithPublicKey(key)

console.log("RSA 加密 key 后的结果: ", encryptedKey)
console.log("\n")
// ######## RSA 处理结束 ########

// AES 加密/解密
let msg = `{"keyword":"X","page":"1","game_key":"dgm","game_sub_key":"sc"}` // 待加密的数据
// let msg = `{"game_key":"dgm","game_sub_key":"sc"}`

let aesCrypto = new AESCrypto("aes-128-ecb", key)
let dataEncrypted = aesCrypto.encrypt(msg)

console.log("AES 数据加密结果: ", dataEncrypted)

import { data } from "./data.js"
let dataDecrypt = aesCrypto.decrypt(data)
console.log("AES 数据解密结果: ", dataDecrypt)
