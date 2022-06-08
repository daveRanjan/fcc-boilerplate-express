let express = require('express');
let app = express();
const path = require('path')

app.use("/public",express.static(__dirname+'/public'));

console.log("Hello World");
absolutePath = __dirname + '/views/index.html'


app.get("/", (req, res)=> {
    res.sendFile(absolutePath);
})


app.get("/json", (req, res)=> {
    res.send('{"message": "Hello json"}');
})






























 module.exports = app;
