// npm init -y package.json 파일 생성되요...
// npm i express mysql
const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "word",
  port:"3306",
});

const app = express();
app.get("/", (req, res) => {
    console.log("index")
  res.send("index");
});
// alt + shift + f 자동정렬
app.get("/students", (req, res) => {
  connection.connect();

  connection.query("SELECT * from students", (error, rows, fields) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });

  connection.end();
});
app.listen("10000", () => {
  console.log("app server 열림");
});
