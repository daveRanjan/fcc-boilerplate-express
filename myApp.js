let express = require('express');
let app = express();
const path = require('path')

app.use("/public",express.static(__dirname+'/public'));

console.log("Hello World");
absolutePath = __dirname + '/views/index.html'

app.use((req, res, next)=> {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get("/", (req, res)=> {
    res.sendFile(absolutePath);
})


app.get("/json", (req, res)=> {
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }
    res.json({message});
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
})

app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word});
})

app.route('/name')
.get((req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`})
})
.post((req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`})
})




























 module.exports = app;
