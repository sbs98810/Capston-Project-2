const express = require('express')
const server = express()

const bp = require("body-parser")
server.use(bp.json())

const cors = require('cors');
server.use(cors({
    origin: '*'
}));

const getdetails = require('./FoodItems/getitemdetails');
server.use('',getdetails)

const port = process.env.port||3001;
server.listen(port, () => console.log('server started'))