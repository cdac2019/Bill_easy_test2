express = require("express");
mysql = require("mysql");
conn = require("./dbconnection");
app = express();
url = require("url");

app.get("/",function(req,res){
    res.sendfile(__dirname+"/index.html");
    
});
app.get("/login",function(req,res){
        res.sendFile(__dirname+"/login.html");
});
 


app.get("/Bill",function(req,res){
con=conn.con;
 userurl =  req.url;
var q = url.parse(userurl ,true).query;

id=q.id;

sql="SELECT * FROM bill_easy where id ="+id+"";
con.query(sql,function(err,result){
    if(err){
        res.send(err);
    }
	else{
     
	   res.write("Welcome To Server \n");
	   var data = JSON.stringify(result);
	   res.write(data);
		console.log(data);
		res.end();
    } 
    
     
})
});

app.listen("9999");
console.log("this is web express js started");