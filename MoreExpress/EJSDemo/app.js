const express = require("express");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));


app.get('/fallinlovewith/:thing', (req,res) => {
    var thing = req.params.thing;
   res.render('love', {thingVar: thing});
      // res.send('you fall in love with ' + th ing);

});

app.get('/posts', function(req,res){
    var posts =[
        {title: 'Post 1', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'Charlie'},
        {title: 'Can you believe this pomsky?', author: 'William'}
        ];
        
        res.render('posts', {posts:posts});
})


app.listen(process.env.PORT, process.env.IP, () => console.log('Serves is listening!'));