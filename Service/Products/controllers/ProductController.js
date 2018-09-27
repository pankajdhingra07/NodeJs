const productService = require('../service/productService');
const async = require('async');

const findProductByCode = function(productCode, done) 
{
	async.waterfall(
		[productService.findProductByCode.bind(null, productCode)], 
				(err, result) => 
				{
					console.log('3.  Business Unit Controller');
					if(err) 
					{
						console.error('Error finding product by code, ERROR:', err);
						done(err);
						return;
					}
					done(null, result);
					//console.log(result);
				}
);
}

module.exports = 
{
	findProductByCode
}