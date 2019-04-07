const mongoose = require('mongoose')

const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'blog';      // REPLACE WITH YOUR DB NAME atls //mongodb+srv://cluster0-0mrhm.mongodb.net/test

mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true });
			  
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('connected  :')}); 

/* class Database {
  	constructor() {
    	this._connect();
  	}
  	_connect() {
    	mongoose
      		.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
      		.then(() => {
        		console.log("Database connection successful");
      		})
      		.catch(err => {
        		console.error("Database connection error");
      	});
  }
}
module.exports = new Database(); */