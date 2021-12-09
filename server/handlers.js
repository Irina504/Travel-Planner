"use strict";

const fetch = require('node-fetch')

// Node Fetch example *******************************

// const fetch = require("node-fetch");

// const url = "https://example.com";

// const get_data = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url);

//************************************ */
require('dotenv').config();

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);


// YELP API's Requests *************************************************

// GET VENUES Suggestions 
const getVenues = (selectedCity, callback) => {

    let attrResult = {}


    client.search({
    term:"Attractions",
    location: selectedCity,
    limit: 12
    }).then(res => {
        attrResult = res.jsonBody.businesses;
        callback(attrResult)
    }).catch(e => {
        console.log(e)
    })
}


// GET HOTELS Suggestions 
const getHotels= (selectedCity, callback) => {

    let hotelResult = {}

    client.search({
    term:"Hotels",
    location: selectedCity,
    limit: 12
    }).then(res => {
        hotelResult = res.jsonBody.businesses;
        callback(hotelResult)
    }).catch(e => {
        console.log(e)
    })
}


// GET RESTAURANTS Suggestions  

const getResto = (selectedCity, callback) => {

    let restoResult = {}

    client.search({
    term:"Restaurants",
    location: selectedCity,
    limit: 12
    }).then(res => {
        restoResult = res.jsonBody.businesses;
        callback(restoResult)
    }).catch(e => {
    console.log(e)
    })
}

//********************************************************************



// get map by location

// get google reviews, address, opening hours 

// post to calendar

// put calendar

// get calendar

// delete activities from calendar

// get calendar activities by date

module.exports =  {
    getVenues,
    getHotels,
    getResto,
}

