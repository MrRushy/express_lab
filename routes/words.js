const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{      //  /user
    res.send('Word Homepage');
});

router.get('/WOTD', (req, res)=>{   //  /user/new
    res.send('Here is the Word of the Day!');
});

module.exports = router;