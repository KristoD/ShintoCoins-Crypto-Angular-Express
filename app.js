var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public/dist'));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"));
});

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});