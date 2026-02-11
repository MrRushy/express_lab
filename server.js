
const express = require('express'); //Calling express as a function sets up server
const app = express();
app.set('view engine', 'ejs');
app.get('/',
    (req, res)=>{
    console.log('Here');
    res.render('index', {userName: "Rushy"});
});

app.get('/users', (req, res)=>{
res.send('User List');
});

app.get('/users/new', (req, res)=>{
res.send('User New Form');
});

app.listen(3030);//Tell our app to listen for requests