// ==UserScript==
// @name         京东
// @namespace    http://tampermonkey.net/
// @version      2024-05-26
// @description  京东自动点击登录,手动过验证
// @author       DesistDaydream
// @match        https://*.m.jd.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js
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
    // agreeCheckbox.click()
    // 查找并点击 "登录" 按钮
    // TODO: 无法成功点击，必须要人工点击一下页面才能激活，否则会一直处于循环中
    $("#app > div > p.policy_tip > input")[0].click()
    var loginXPath = "/html/body/div[2]/div/a"
    var checkExist = setInterval(function () {
      var loginButton = document.evaluate(loginXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (loginButton && loginButton.classList.contains("btn-active")) {
        console.log("找到登录按钮，点击...")
        loginButton.click()
        clearInterval(checkExist)
      }
    }, 100) // 每100ms检查一次
  } else {
    console.log("同意协议复选框未找到")
  }
}

;(function () {
  "use strict"

  // 等待页面加载完成
  window.addEventListener("load", simulateClick, false)
  // window.addEventListener(
  //   "load",
  //   function () {
  //     $("#app > div > p.policy_tip > input")[0].click()
  //   },
  //   false
  // )
})()
