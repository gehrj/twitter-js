const express = require('express');
const app = express();
const volleyBall = require('volleyball');
const nunjucks = require('nunjucks');

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.set('view engine','html');
app.engine('html', nunjucks.render);
nunjucks.configure('views',{noCache: true});


app.use(volleyBall);
app.get('/',function(req,res) {
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/news',function(req,res) {
    res.send('News Page');
})

// app.get('/special',function(req,res) {
//     res.send('test');
// })

app.listen(3000,function(){
    console.log('The Server is Up!');
});