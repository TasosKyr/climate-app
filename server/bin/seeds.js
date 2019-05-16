const { scrapeChangeOrg } = require('./../routes/scraping')
const Petition = require('./../models/Petition')

const scraping = async () => {
  const petitions = await scrapeChangeOrg()
  await Promise.all(
    petitions.map(element => {
      return Petition.findOneAndUpdate({ url: element.url }, element, { upsert: true, new: true })
    })
  );
}

scraping()