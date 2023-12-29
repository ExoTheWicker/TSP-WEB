//Load libraries

const express = require('express');

const app = express()

const port = 5000

//Define express setting

app.set('view engine', 'ejs')


app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(port);

console.log(`App at 127.0.0.1:${port}`)