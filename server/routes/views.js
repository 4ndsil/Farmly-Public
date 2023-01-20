const router = require('express').Router()

router.get('/', async (req, res) => {    
    res.render('home')
});

router.get('/policy', async (req, res) => {    
    res.render('policy')
});

router.get('/terms-producer', async (req, res) => {    
    res.render('terms-producer')
});

router.get('/terms-buyer', async (req, res) => {    
    res.render('terms-buyer')
});

module.exports = router