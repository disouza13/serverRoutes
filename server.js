const express = require('express')
const routes = require('./src/controllers/routes')
const app = express();

app.use(routes)
app.listen(3344, ()=>{
    console.log('servidor on para a porta 3344')
});