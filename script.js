const express = require("express");
const mongoose = require("mongoose");

const productsRouter = require('./controllers/routes/productsRoutes');
const { isDataView } = require("util/types");
const app = express();
const test = require('./models/productsModel.js');

app.use(express.json());

app.use('/api/products',productsRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@employes.tkrripm.mongodb.net/?retryWrites=true&w=majority&appName=Employes'
const databaseUser = 'Harshit';
const databasePassword = 'Chotu@123';
const databaseName = 'Day 10';
 let  databaselink = url.replace("$_USERNAME_$",databaseUser);

databaselink = url.replace("$_PASSWORD_$",databasePassword);

databaselink = url.replace("$_DB_NAME_$",databaseName);

mongoose.connect(databaselink)
.then(
    () => console.log("Connected to database"),
    
);

app.listen(1400,
    () => console.log("-----App started------"),


);





