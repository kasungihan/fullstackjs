const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name:   {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:  String,
    date: { type: Date, default: Date.now },
 
  })

module.exports = User = mongoose.model('user', UserSchema) 