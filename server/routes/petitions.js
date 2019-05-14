
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

router.post('/petitions/star', (req, res, next) => {
  console.log(req.body)
  const user = req.user
  if (typeof user.myCollection === 'undefined') {
    const myCollection = {
      events: [],
      petitions: [],
      politics: []
    }
    user.myCollection = myCollection
  }
  user.myCollection.petitions.push(req.body.id)
  user.save()
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error('failed to save myCollection', err)
    })
})




module.exports = router;