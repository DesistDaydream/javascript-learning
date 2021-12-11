var http = require('https');

// 用于请求的选项
var options = {
    host: 'www.baidu.com',
    port: 443,
    path: '/',
    method: 'GET'
};

// 处理响应的回调函数
var callback = function (response) {
    // 不断更新数据
    var body = '';
    response.on('data', function (data) {
        body += data;
    });

    response.on('end', function () {
        // 数据接收完成
        console.log(body);
        console.log(`${response.statusCode}`)
    });
}

// 向服务端发送请求
var req = http.request(options, callback);
req.end();
