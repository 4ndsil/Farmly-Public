const router = require('express').Router()

router.get('/', async (req, res) => {    
    res.render('home')
});

router.get('/policy', async (req, res) => {    
    res.render('policy')
});

router.get('/terms', async (req, res) => {    
    res.render('terms')
});

module.exports = router