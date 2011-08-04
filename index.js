var express = require('./node_modules/express');
app = express.createServer();

app.configure('development', function(){
    var app_name = 'express test';
    app.use(express.static(__dirname + '/public'));
});

app.register('.haml', require('./node_modules/hamljs'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.render('index.html.haml', {layout: false, user: {name:'michal',
							 lastname: 'szymanski', age: 10}});
});

app.listen(11300);
console.log('Server running at http://91.227.38.245:11300/');