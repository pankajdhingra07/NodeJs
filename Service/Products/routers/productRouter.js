const router = require('express').Router();
const productCtrl = require('../controllers/ProductController');

router.get('/value/:buname', (req, res) => 
{
  try 
  {
    console.log('1.  Business Unit Router');
    let buName = req.params.buname;
    productCtrl.findProductByCode(buName, (err, result) => 
    {
      if(err) 
        {
        console.log('Error in finding product by code:', buName, ' ERROR:', err);
        res.status(400).send({error: 'Something went wrong, please try again later..!'});
        return;
        }
      res.send(result);
      return;
    }
    );
  } 
catch(err) {
    console.error('Unexpected error, ERROR::', err);
    res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    return;
  }
});

module.exports = router;