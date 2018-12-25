var express = require('express');
var router = express.Router();

let squaresController = require('../controllers/squaresController');

router.get('/monohybrid', squaresController.monohybrid);  
router.post('/monohybrid', squaresController.post_monohybrid);  

router.get('/dihybrid', squaresController.dihybrid); 
router.post('/dihybrid', squaresController.post_dihybrid);  

router.get('/trihybrid', squaresController.trihybrid);  
router.post('/trihybrid', squaresController.post_trihybrid);  

router.get('/blood_typing', squaresController.blood_typing);
router.post('/blood_typing', squaresController.post_blood_typing);

module.exports = router;