const express = require('express')
const moment = require('moment')
const app = express()

//const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000 

// html req body middleware
//app.use(bodyParser.json());

//version 4.16 above
app.use(express.json());

// app logger / third party plugin npm i winston
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
    next();
}

//init middleware
app.use(logger)

//set static folder  || you can create many html file to route
app.use(express.static(path.join(__dirname, 'public')))

// collection of apis
const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const adsRouter = require('./routes/ads')
//const postRouter = require('./routes/post')

/**
	 * Generate a JSON REST API response //when you make a application route comment like this
	 *
	 * If data present and no error, we will send status 200 with JSON data
	 * If no data but has error, we will send HTTP error code and message
	 * 
	 * @param  {Object} res        	ExpressJS res object
	 * @param  {json} 	data       	JSON response data
	 * @param  {Object} err        	Error object
	 * @param  {String} errMessage  Custom error message
	 * @return {json} If res assigned, return with res, otherwise return the response JSON object
*/

app.use('/', indexRouter)

app.use('/ads', adsRouter)

app.use('/user', userRouter)


//app.use('/post', postRouter)


app.listen(port, () => console.log(`Listening on port ${port}!`))