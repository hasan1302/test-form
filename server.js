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

app.use(bodyParser.urlencoded({extended: true}))

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

  app.get('/getadmin', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('admin').find().toArray((err, result) => {
      if (err) return console.log(err)
        res.send(result);
    });
  });

  app.post('/sell', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('sellings').save(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('Selling complete');
      //res.redirect('http://localhost:3000/');
    })
  })

  app.get('/totalorders', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('sellings').find().toArray((err, result) => {
      if (err) return console.log(err)
        res.send(result);
    });
  });

  app.get('/getclientservices/:id', (req, res) => {
    let id = req.params.id;
    let o_id = new Object(id);
    db.collection('clients').find({_id: o_id}).toArray((err, result) => {
      if (err) return console.log(err)
      console.log(result);

    })
    console.log(req.params.id);
  })

  app.post('/selltoclient', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.collection('clients').update ({ _id: ObjectId(req.body._id) }, {$set: {
       title: req.body.title,
       description: req.body.description
    }
    }, function (err, result) {
         if (err) {console.log(err);} else {console.log("Post Updated successfully" + req.body)}
    }
  )});

