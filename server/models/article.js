const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title:   {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    content:  String,
    date: { type: Date, default: Date.now },
 
  })

module.exports = mongoose.model('Article', ArticleSchema) // Article = mongoose.model('article', ArticleSchema)