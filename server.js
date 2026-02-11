
const express = require('express'); //Calling express as a function sets up server
const app = express();

app.get('/',
    (req, res)=>{
    console.log('Here');
    res.render('index');
});

app.get('/potato',(req,res)=>{
    res.send('<p>Here are your potatoes</p>')
});

app.get('/status',(req,res)=>{
   // res.status(500).json(message,"ERROR");
    res.download('server.js');
});

app.listen(3030);//Tell our app to listen for requests