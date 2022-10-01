//1. 引入exprss
const express = require("express");
//2.创建应用对象
const app = express();

//3.创建路由规则
app.get("/", (request, response) => {
  //设置响应体
  response.send("hello express");
});

//get方法
app.get("/server", (request, response) => {
  //设置响应头 设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("Hello Ajax Get");
});

//延迟响应
app.get("/delay", (request, response) => {
  //设置响应头 设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  setTimeout(() => {
    response.send("延时响应");
  }, 3000);
});

//post方法
app.post("/server", (request, response) => {
  //设置响应头 设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("hello Ajax Post");
});

//all方法 接收任意类型的请求
app.all("/json-server", (request, response) => {
  //设置响应头 设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  const data = {
    name: "json数据",
  };
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

//axios服务
app.all("/axios-server", (request, response) => {
  //设置响应头 设置可以跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置请求头数据
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "axios服务",
  };
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

// 4.监听端口
app.listen(8000, () => {
  console.log("server already in port 8000 starting!");
});
