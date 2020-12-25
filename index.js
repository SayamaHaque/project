const mysql2 = require('mysql2');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql2.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'sayama.ih97',
        database : 'employeedb',
        insecureAuth : true
      
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

//Get all employees
app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get an employees
app.get('/employees/:id', (req, res) => {
  //  mysqlConnection.query('SELECT * FROM Employee WHERE id = ?', [req.params.id], (err, rows, fields) => {
        mysqlConnection.query('SELECT * FROM view_employeetable WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an employees
app.delete('/employees/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Employee WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an employees
app.post('/employees', (req, res) =>{
    let employee = req.body;
    var sql = "Insert into employee values(?,?,?,?,?,?,?,?,?)"
    mysqlConnection.query(sql, [employee.id ,employee.first_name, employee.last_name, employee.phone, employee.email, employee.address,employee.date_of_birth,employee.age,employee.image_upload], (err, rows, fields) => {
        if (!err)
           res.send('Inserted employee data.');
        else
            console.log(err);
    })
});


//Update an employees data
app.put('/employees', (req, res) =>{
    let employee = req.body;
    var sql = "update employee set employee.first_name =?,employee.last_name =?,employee.phone =?,employee.email =?,employee.address=?,employee.date_of_birth =?,employee.age =?,employee.image_upload =? where employee.id = ? " ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [employee.first_name, employee.last_name, employee.phone, employee.email, employee.address,employee.date_of_birth,employee.age,employee.image_upload,employee.id], (err, rows, fields) => {
        if (!err)
           res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/age/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.age =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.age,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/first_name/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.first_name =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.first_name,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/last_name/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.Last_name =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.last_name,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/phone/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.phone =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.phone,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/email/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.email =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.email,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/address/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.address =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.address,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/date_of_birth/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.date_of_birth =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.date_of_birth,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});

//Update an employees data
app.put('/image/:id', (req, res) =>{
    let emp = req.body;
    var sql = "update employee set employee.image_upload =? where id =?" ;
       // mysqlConnection.query(sql);
       mysqlConnection.query(sql, [emp.image_upload,req.params.id], (err, rows, fields) => {
        if (!err)
             res.send('Updated employee data.');
        else
            console.log(err);
    })
});


