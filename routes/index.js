var express = require('express');
var router = express.Router();

// Connect to mongodb
// 1. Require teh module
var mongodb = require('mongodb');
// 2. Make a mongoClient
var mongoClient = mongodb.MongoClient;
// console.log(mongoClient);
// 3. Set up the path: protocol://server:port/database
var mongoUrl = 'mongodb://localhost:27017/movieDB';
// Make a global var db to use over and over
var db;

// 2. Actually actually connect...
mongoClient.connect(mongoUrl, (error, database)=>{
	if(error){
		throw error;
	}else{
		// Set the global db to the connected object
		db = database;
		console.log("Connected to Mongo successfully!");
	}
})

/* GET home page. */
router.get('/', function(req, res, next) {
	// unlike the console, you do:
	// db.collection, you pass collection the collection you watn
	// then you add .find, or .remove, or .update, etc.
	db.collection('movies').find().toArray((error,results)=>{
		console.log(results)
		res.json(results)
	})
  	// res.render('index', { title: 'Express' });
});

module.exports = router;
