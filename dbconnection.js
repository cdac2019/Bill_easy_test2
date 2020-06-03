 
var mysql = require('mysql');

exports.con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mainstack"
});

exports.con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});