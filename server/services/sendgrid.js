//require(services.env.SENDGRID_API_KEYSENDGRID_API_KEY).config();

const router = require('express').Router()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.post("/", async (req, res) => {
  const msg = {
    to: 'info@farmly.nu',
    from: 'info@farmly.nu',
    subject: `Inkommet mail från ${req.body.cname}`,
    text: `Meddelande från ${req.body.cemail}\n\n${req.body.cmessage}\n\n ${req.body.cphone}`,
  }
  try {
    sgMail.send(msg);
    console.log('sent email')
    res.redirect("/")
  } catch (error) {
    res.send('Något gick fel, vänligen försök igen.')
  }
})

module.exports = router