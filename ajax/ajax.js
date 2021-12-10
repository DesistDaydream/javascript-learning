var xhr = new XMLHttpRequest()
xhr.open('GET','https://www.baidu.com',true)
xhr.onload = function () {
    console.log(xhr.responseText)
}
xhr.send()
