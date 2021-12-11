"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// using uuid to create unique id for our customers
const { v4: uuidv4 } = require("uuid");


// create a new user 

// add travel plan 

// get travel plan(s)

// update travel plan 

// delete travel plan 