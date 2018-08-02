const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.post('/addfriend', (req,res) => {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends');
});
app.get('/', (req, res) => res.render('home'));

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, () => console.log('Serves is listening!'));