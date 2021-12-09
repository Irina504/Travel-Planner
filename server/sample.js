"use strict";
const fetch = require('node-fetch')


const yelp = require('yelp-fusion');
const client = yelp.client('q5qTQihY9TF4Hec-FOQnI-e4biaUm96zPqyDWVBPvCE4X6qt0-Yygy5juU3PSUK8KFPKOpKdxgncChUtu99P5aPLQM2jBlhTVkK7i6D0X8FeeylOhih2jmHDipSvYXYx');

// client.reviews('gary-danko-san-francisco').then(response => {
//     console.log(response.jsonBody.reviews[0].text);
//   }).catch(e => {
//     console.log(e);
//   });

  const searhAttr = (city) => {

    client.search({
    term:'Attractions',
    location: `${city}`,
    limit: 12
  }).then(response => {
    console.log(response)
  }).catch(e => {
    console.log(e)
  })
  }

  searhAttr("paris");







