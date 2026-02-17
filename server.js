
const express = require('express'); //Calling express as a function sets up server
const app = express();
const userRouter = require('./routes/users');
const wordRouter = require('./routes/words');


app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/words',wordRouter);
app.use(express.static("public"))
app.get('/',
    (req, res)=>{
    console.log('Here');
    res.render('index', {userName: "Rushy"});
});


app.listen(3030);//Tell our app to listen for requests