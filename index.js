const express = require ("express");
const cors = require ("cors");

const app = express();

// rutas

const about =require("./JSON/About.json");
const portfolio=require("./JSON/Portfolio.json");
/*
app.get('/', (req,res)=>{
    
});
*/
app.get('/about', (req,res)=>{
    res.json(about)
});

app.get('/portfolio', (req,res)=>{
    res.json(portfolio)
});


//fin de rutas


app.use(cors());

const port= process.env.PORT || 8080;

app.listen(port,()=>{console.log(`Server on: , ${port}`)});

