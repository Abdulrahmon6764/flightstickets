const path = require('path') 
const db = require('../Database/db')
const { param } = require('../routes/admin')
 

exports.LoginPage = (req,res)=>{
    res.render('Login')
}

exports.RegisterPage = (req,res)=>{
    res.render('Register')
}
 exports.HomePage = (req,res)=>{
    db.execute("SELECT * FROM flightstickets").then(results =>{
        res.render('Index',{Records:results[0]})
    })
   

}
exports.addTickets = (req,res)=>{
    res.render('add-tickets')
}
exports.postaddTickets = (req,res)=>{
 const {Froms,Tos,Amount,Date,Image} = req.body
db.execute("INSERT INTO flightstickets(froms,tos,amount,image,date) VALUES(?,?,?,?,?)",[Froms,Tos,Amount,Date,Image]).then(result =>{
    res.redirect('/')
})
}

exports.postDeleteTic = (req,res)=>{
    const {Id} = req.body
    db.execute("DELETE FROM flightstickets WHERE id=?",[Id]).then(delet =>{
        res.redirect('/')
    })
}

exports.getUpdateTic = (req,res)=>{
let id = req.params.id
 db.execute("SELECT * FROM flightstickets WHERE id=?",[id]).then(results =>{
    res.render('updateTicket',{Product:results[0]})
 })
}

exports.postUpdateTic = (req,res)=>{
const {Id, Froms,Tos,Amount,Date,Image} = req.body
db.execute("UPDATE flightstickets SET froms=?,tos=?,amount=?,image=?,date=? WHERE id=?",[Froms,Tos,Amount,Image,Date,Id]).then(res =>{
})
res.redirect('/')
}