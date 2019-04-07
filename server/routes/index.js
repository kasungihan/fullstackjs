const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000 

app.use(bodyParser.json())

app.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }))

// article api 
const post = require('./post')
app.use('/post', post)


app.listen(port, () => console.log(`Listening on port ${port}!`))