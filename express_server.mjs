import express from "express";
import fs from "fs";
//const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});

// http://127.0.0.1:5500/login?userid=apple&userpw=1234
app.get("/login", (req, res) => {
  console.log(res.query);
  console.log("아이디: ", req.query.userid);
  console.log("비밀번호: ", req.query.userpw);
  const filePath = path.join("result.ejs");
  ejs.renderFile(filePath, { name: "김사과" }, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("서버 오류");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
  });
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
