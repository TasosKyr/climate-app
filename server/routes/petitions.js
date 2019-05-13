
const express = require('express');
const router = express.Router();
const Petition = require('../models/Petition')
const { scrapeChangeOrg } = require('./scraping')


router.get('/petitions', (req, res, next) => {
  scrapeChangeOrg()
    .then(petitions => {
      return Promise.all(
        petitions.map(element => {
          return Petition.findOneAndUpdate({ url: element.url }, element, { upsert: true, new: true })
        })
      );
    })
    .then((petitions) => {
      res.json(petitions);
    }).catch(err => {
      console.error('rendering petitions failed', err)
    });
});




module.exports = router;