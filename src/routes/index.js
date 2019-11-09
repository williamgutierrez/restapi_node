
const{Router} = require('express');
const router = Router();
//route
router.get('/test',(req, res) => {
    const data ={
        "name":"FAst",
        "website":"faztweb.com"
    }
     
    res.json(data);
    });
 module.exports = router;