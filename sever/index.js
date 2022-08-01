const express = require('express')
const mysql = require('mysql')
const cors = require ('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var pool = mysql.createConnection({
    host:'localhost',
    database:'db_etc',
    user:'root',
    password:''
})

pool.connect(err=>{err?console.log(err):console.log('Connection to database OK')})


app.get('/alloperations', (req,res)=>{
  pool.query('SELECT Pack_id, Operation_name, quantity FROM pack_operation', (err,rows)=>{err?res.send(err):res.send(rows)})
})

app.get('/allcontrole',(req,res)=>{
  pool.query('SELECT  Qte, QtePD FROM controle_packet',(err,rows)=>{err?res.send(err):res.send(rows)})
})

/*app.get('/performance', (req,res)=>{
  pool.query('SELECT performance, cur_day FROM performance_per_hour', (err,rows)=>{err?res.send(err):res.send(rows)})
})*/

app.get("/operations", (req, res) => {
  pool.query(
    "SELECT DISTINCT(Pack_id), Operation_name, quantity FROM pack_operation WHERE cur_day = DATE_FORMAT(CURDATE(), '%d/%m/%Y')",
    (err, rows) => {
      err ? res.send(err) : res.send(rows);
    }
  );
});

app.get("/controle", (req, res) => {
  pool.query(
    "SELECT  Qte, QtePD, cur_day FROM controle_packet WHERE cur_day = DATE_FORMAT(CURDATE(), '%d/%m/%Y')",
    (err, rows) => {
      err ? res.send(err) : res.send(rows);
    }
  );
});

app.get("/performance", (req, res) => {
  pool.query(
    "SELECT performance, cur_day FROM performance_per_hour WHERE cur_day = DATE_FORMAT(CURDATE(), '%d/%m/%Y')",
    (err, rows) => {
      err ? res.send(err) : res.send(rows);
    }
  );
});


app.listen(port, (err)=>{err?console.log(err):console.log(`Server Runing on ${port}`)})