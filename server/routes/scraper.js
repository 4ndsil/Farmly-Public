const router = require('express').Router()
const metascraper = require('metascraper')

const scraper = metascraper([
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-url')(),
])

router.get("/", async (req, res) => {
  const urls = [
    "https://www.butikstrender.se/ny-forsaljningskanal-for-svenska-ravaror/",
    "https://www.oru.se/nyheter/nyhetsarkiv/nyhetsarkiv-2021/nu-testkors-studentinnovationen-pa-marknaden/",
    "https://www.ja.se/artikel/2229548/det-r-vldigt-stort-fr-oss-att-kra-den-hr-piloten.html",
    "https://www.svt.se/nyheter/lokalt/orebro/app-ska-ge-mer-lokal-mat-pa-restaurangborden"
  ]

  const scrapedObjs = []

  let i = 0;
  while (i != urls.length) {    
    const url = urls[i]

    const response = await fetch(url)
    const html = await response.text()
    await scraper({
      html,
      url
    }).then((promise) => {
      Promise.resolve(promise).then((data) => {
        const scrapedObj = {
          "title": data["title"],
          "image": data["image"],
          "url": data['url'],
          "desc": data["description"],
          "date": data["date"],
        }

        scrapedObjs.push(scrapedObj)
      })      
    })

    i++
  }
  res.send(scrapedObjs)
})

module.exports = router