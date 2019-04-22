// All base ("/") routes go in here

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Reached root end point here');
}); 

module.exports = router;