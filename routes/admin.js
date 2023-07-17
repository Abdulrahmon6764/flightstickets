const route = require('express').Router();
const controllerPages = require('../Controller/Adminroutes');
route.get('/register',controllerPages.RegisterPage)
route.get('/login',controllerPages.LoginPage)
route.get('/',controllerPages.HomePage)
route.get('/add-tickets',controllerPages.addTickets)
route.post('/add-tickets',controllerPages.postaddTickets)
route.post('/delete-ticket',controllerPages.postDeleteTic)
route.get('/update-ticket/:id',controllerPages.getUpdateTic)
route.post('/update-ticket',controllerPages.postUpdateTic)
module.exports = route