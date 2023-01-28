const router = require('express').Router()
const axios = require("axios");
const BASE_URL = process.env.CORE_BASE_URL

router.post("/post-login", (req, res) => {
    let config =  {
        headers: {
        'Content-Type': 'application/json',
      }
    }
    
    axios.post(`${BASE_URL}/user-access/user`, {            
            email: req.body.email,
            password: req.body.password
        }, config)
        .then((response) => {
            const data = response.data.map((plant) => {
                return Object.keys(plant)
                    .filter((key) => fields.includes(key))
                    .reduce((obj, key) => {
                        obj[key] = plant[key];
                        return obj;
                    }, {})
            })
            res.json(data);
        })
        .catch((error) => {
            console.error(error.message);
            res.sendStatus();
        })
})

module.exports = router;