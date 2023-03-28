const jwt = require("jsonwebtoken")
const router = require('express').Router()
const { userAuthentication } = require("../farmlyCore/users");

router.post("/", async (req, res) => {
    console.log('hej')
    const { email, password } = req.body
    console.log(req)
    let user = userAuthentication({email: email, password: password}) 
    if (user.password !== password)  {
        return
    }

    console.log(user)
    delete user.password

    const token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "0.25h"})

    res.cookie("token", token, {
        httpsOnly: true,    
    })

return res.redirect(`/${user.Id}`)
})

module.exports = router;

