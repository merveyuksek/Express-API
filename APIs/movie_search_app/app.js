const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('search'));

app.get('/results',(req,res) => {
    var query = req.query.search;
    var url = 'http://omdbapi.com/?s=' + query + '&apikey=thewdb'
    request(url,(error,response,body) => {
        if(!error && response.statusCode == 200) {
            const data = JSON.parse(body);
           // res.send(results['Search'][0]['Title']);
           res.render('results', {data: data});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Movie App has started!!');
});