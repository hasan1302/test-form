const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 8000;
const dbUrl = 'mongodb://pipette307:bgvjhxtq@ds157185.mlab.com:57185/tatarchat';
const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect(dbUrl,(err, database) => {
  if (err) return console.log("Error connecting to Mongo");
  db = database;
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  })
});

app.post('/addclient', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('Clients').save(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('saved client to database');
      //res.redirect('http://localhost:3000/');
    })
  })