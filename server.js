const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 8000;
const dbUrl = 'mongodb://pipette307:bgvjhxtq@ds157185.mlab.com:57185/tatarchat';
const MongoClient = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var db;


MongoClient.connect(dbUrl,(err, database) => {
  if (err) return console.log("Error connecting to Mongo");
  db = database;
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  })
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/addclient', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('clients').save(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('saved client to database');
      //res.redirect('http://localhost:3000/');
    })
  })
  
  app.post('/regadmin', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('admin').save(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('saved client to database');
      //res.redirect('http://localhost:3000/');
    })
  })

  app.get('/getclients', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('clients').find().toArray((err, result) => {
      if (err) return console.log(err)
        res.send(result);
    });
  });

  app.get('/getorders', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('orders').find().toArray((err, result) => {
      if (err) return console.log(err)
        res.send(result);
    });
  });

  app.get('/getadmin', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('admin').find().toArray((err, result) => {
      if (err) return console.log(err)
        res.send(result);
    });
  });

  app.post('/order', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('orders').save(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('Selling complete');
    })
  })

  app.get('/totalorders', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('sellings').find().toArray((err, result) => {
      if (err) return console.log(err)
        res.send(result);
    });
  });

  app.post('/ordersuccess', (req, res) => {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('orders').updateOne(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log(result);
    })
  })

  app.delete('/deleteorder', (req, res) => {
    db.collection('orders').deleteOne({ 
      status: "Booked" 
    })
    //.then(function(result) {
   //   // process result
   // })
    console.log('Deleted order : ' + " ");
  });

  app.put('/orderdone', (req, res) => {
    console.log("Order done!")
  });

app.updateOne
