const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>Hello There!<h1>'))

app.listen(process.env.PORT,process.env.IP, () => console.log('Example app listening on port 3000!'))

app.get('/bye', (req,res) => res.send('Goodbye!'));

app.get('/cat', (req,res) => res.send('meow!!'));

app.get('/r/:subName', function(req,res) { 
   // console.log(req.params);
   var subPage = req.params.subName;
    res.send('Welcome to ' + subPage);
    });

app.get('/r/:subName/comments/:id/:title', (req,res) => res.send('comment page!'));

app.get('*', (req,res) => res.send('You are a star!'));
