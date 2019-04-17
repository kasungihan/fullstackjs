const express = require('express')
const Joi = require('joi');
const users = require('../User')
const router = express.Router();

// get all users
router.get('/', function(req, res){
    res.json(users);
})

//get single users
router.get('/:id', function(req, res){
    const id = req.params.id;
    const found = users.some(user => user.id === parseInt(id))
    if(found){
        res.json({data: users.filter(user => user.id === parseInt(id))})
    } else {
        res.status(404).json({msg: 'not found data'})
    }
})

//create user
router.post('/', (req, res) => {
    const { name, email, age } = req.body;

    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        age: Joi.number().required()
    }

    const result = Joi.validate(req.body, schema)
    if(result.error){
        res.status(400).json(result.error)
    }
    /* const newUser = {
        id: 4,
        name: name,
        email: email,
        age: age
    } */
})

module.exports = router;