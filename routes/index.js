module.exports = function (io) {
  const express = require('express');
  const router = express.Router();
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');
  const path = require('path')

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: tweets } );
  });

  router.get('/tweets/:id', function(req,res) {
    var id = parseInt(req.params.id);
    var tweets = tweetBank.find({id: id});
    res.render('index', {tweets: tweets});

  })

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', {name,text});
    res.redirect('/');
  });




return router;
};
