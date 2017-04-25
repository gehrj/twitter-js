const express = require('express');
const app = express();
const volleyBall = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(express.static('public'))
app.use('/', routes);

app.set('view engine','html');
app.engine('html', nunjucks.render);
nunjucks.configure('views',{noCache: true});


app.use(volleyBall);



app.listen(3000,function(){
    console.log('The Server is Up!');
});
