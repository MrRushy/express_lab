const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises;

router.get('/', (req, res)=>{      
    res.send('Word Homepage');
});

router.get('/WOTD', (req, res)=>{   
res.render('WOTD')
});

module.exports = router;