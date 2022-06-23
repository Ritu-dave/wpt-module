// const { response } = require('express');
const express = require('express');
const app = express();

const mysql = require('mysql2');
app.use(express.static("abc"));

app.listen(500, function () {
    console.log("server listening at port 500...");
});

app.get('/getname',(req, res)=> {
    
	
    console.log("ajax called");
    const dbobject = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'mydatabase',
	port:3306
   }

   const conn = mysql.createConnection(dbobject);
    
   let output = {status: false , detail:{bookname:"" , price: 0} }
   let bookid = req.query.bookid;
   console.log(bookid);
   conn.query('select bookid,bookname,price from book where bookid = ?'[bookid],
   (error,row)=>{
    if (error){
        console.log(error);
    }
    else{
        if (rows.length >0){
            output.status = true;
            output.detail = rows[1];
        }
        else{
            console.log("no book found");
        }
    }
    console.log(output);
    resp.send(output);
   
  });



  

});


app.get('/update',(req, res)=> {
    
	
    console.log("ajax called");
    const dbobject = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'mydatabase',
	port:3306
   }

   const conn = mysql.createConnection(dbobject);
    
   let output = {status: false}
   let bookid = req.query.bookid;
   console.log(bookid);
   conn.query('select bookid,bookname,price from book where bookid = ?'[bookid],
   (error,row)=>{
    if (error){
        console.log(error);
    }
    else{
        if (res.affectedRows > 0 ){
            output.status = true;
           
        }
        else{
            console.log("not updated");
        }
    }
    console.log(output);
    resp.send(output);
   
  });



  

});