const express = require('express')
// back end validate
const Joi = require('joi');
const slugify = require('slugify')

require('../models/db');

const Article = require('../models/article')

const router = express.Router();

router.get('/', (req, res) => {
    Article.find({}).exec(function(err, leads) {

        if(err) {

            res.status(404).json({ msg: 'data not found!'})

        } else {

            res.json(leads);
        }

    });

})

router.post('/', (req, res) => {

    const { title, content } = req.body

    const post = new Article({
        title: title,
        slug: slugify(title),
        content: content
    })
    //post.save()
    res.json({ msg: 'insert successfully', data: post });

})

router.get('/:id', (req, res) => {

    Article.find({ _id: req.params.id}).exec(function(err, leads) {

        if(err){

            res.status(404);

        } else {
            
            res.json(leads);

        }

    });

})

router.put('/:id', (req, res) => {
    const { title } = req.body

    Article.updateOne({ _id: req.params.id}, { title: title }).exec((err, leads) => {//where({ _id: req.params.id }).update({ title: title })//;

        if(err){
            
            res.status(404);

        } else {
            
            res.json(leads);

        }
    })

})

router.delete('/:id', (req, res) => {

    Article.deleteOne({ _id: req.params.id}).exec((err, leads) => {

        if(err){
            
            res.status(404);

        } else {
            
            res.json(leads);

        }
    })

})


module.exports = router;