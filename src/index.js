const express = require("express");
const { json } = require('express');
const connect = require('./config/database');
const todoRoute = require('./router/todoRoutes');
const todoController = require('./controller/todoController');

connect();

const app = express();
app.use(json());
app.use('/todo',todoRoute);

//setup template engine

app.set('view engine', 'ejs');

//static files
app.use(express.static('./src'));

//fire controllers
todoController(app);

const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Zuri training on Mongodb")
})

app.listen(port, () => console.log(`Server is running on port ${port}`));