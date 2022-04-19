const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({path:'D:/Company Work/Nise-Comport/ns-db-men/server'+'/config.env'});//IMporting ENV
if(process.env.VAR!=="PRODUCTION"){
const PORT = process.env.PORT|| 5000;
}
const PORT = process.env.PORT;
app.use(express.json());
const mongodb= require('./db/conn');

mongodb();// Connecting DB

app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})
