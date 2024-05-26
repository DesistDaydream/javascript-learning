// ==UserScript==
// @name         京东
// @namespace    http://tampermonkey.net/
// @version      2024-05-26
// @description  京东自动点击登录,手动过验证
// @author       DesistDaydream
// @match        https://plogin.m.jd.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function simulateClick() {
  // 查找并点击 "账号密码登录"
  var loginfMethodXPath = "/html/body/div[2]/div/p[1]/span[1]"
  var loginMethodButton = document.evaluate(loginfMethodXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (loginMethodButton) {
    loginMethodButton.click()
  } else {
    console.error("账号密码登录按钮未找到")
  }

  // 查找并点击 "同意协议" 复选框
  var agreeCheckXPath = "/html/body/div[2]/div/p[2]/input"
  var agreeCheckbox = document.evaluate(agreeCheckXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (agreeCheckbox) {
    // TODO: 无法成功触发点击事件，必须要人工操作一下页面才能让下一个登录按钮激活
    // 这个是否有用？https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
    agreeCheckbox.click()
  } else {
    console.log("同意协议复选框未找到")
  }

  // 查找并点击 "登录" 按钮
  var loginXPath = "/html/body/div[2]/div/a"
  // document.body.click()
  var checkExist = setInterval(function () {
    var loginButton = document.evaluate(loginXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    // TODO: 由于 同意协议 的点击事件无法激活，需要等待人工操作一下页面，才能然登录按钮激活，按钮的 class 才会包含 btn-active 字符串
    if (loginButton && loginButton.classList.contains("btn-active")) {
      console.log("找到登录按钮，点击...")
      loginButton.click()
      clearInterval(checkExist)
    }
  }, 100) // 每100ms检查一次
}

;(function () {
  "use strict"

  // 等待页面加载完成
  window.addEventListener("load", simulateClick, false)
})()
