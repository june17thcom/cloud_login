import express from "express";
import fs from "fs";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
  console.log(res.query);
  console.log("아이디: ", req.query.userid);
  console.log("비밀번호: ", req.query.userpw);
  //next();
});

app.get("/login", (req, res) => {
  const { userid, userpw } = req.query;

  console.log("아이디:", userid);
  console.log("비밀번호:", userpw);

  res.render("result", { userid, userpw });
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
