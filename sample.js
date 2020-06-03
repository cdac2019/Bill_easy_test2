const {pool,Clint} =require('pg')
/*const connectionString='postgressql://postgres:demo1234@loclhost:5432/test'
const client =new Client({
connectionString:connectionString

})
cliet.connect()
client.query('select *from compamy',(err,res)=>{console.log(err,res
client.end()*/
const pool =new Pool({
	user : "postgres",
	host :"localhost",
	database :"test",
	password :"demo1234",
	port :5432
)}
pool.query("creat table company (id  int, name varchar (20),email varchar(20),mobileno int )",(err,res))=>({
console.log(err,res)
pool.end()
})