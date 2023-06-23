const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listining on 8080')
});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});
app.use(express.static('public'));