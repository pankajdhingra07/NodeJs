const ProductModel = require('../models/productEntity');


const findProductByCode = function(buName, done) 
{
let queryBU = { "BuName": buName };
 console.log('2.  Business Unit Service');
  ProductModel
    .findOne(queryBU)
        .exec((err, colln) => 
        {
            if(err) 
            {
            console.error('Error in finding product by code:', buName, ' Error:', err);
            done(err);
            return;
            }
      done(null, colln);
      }
  );
}
module.exports = {
  findProductByCode
}