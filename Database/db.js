const mysql2 = require('mysql2')
 const  connect = mysql2.createPool({
    host:'localhost',
    user:'root',
    database:'tickets',
    password:''
 })
module.exports =  connect.promise()