

function calc  (prices ,product) {
	var hasProduct = [];
	var price = 0;
	var countProduct = 0;
	var knowProduct = [];
	for (var i = product.length - 1; i >= 0; i--) {
		hasProduct.push(product[i]);
		if (knowProduct.filter(function(x){return x==product[i]}).length  == 0) {
			knowProduct.push(product[i])
		};
		if (hasProduct.filter(function(x){return x==hasProduct[i]}).length > 2) {

			for (var j=hasProduct.length-1; j>=0; j--) {
				if (hasProduct[j] === product[i]) {
					hasProduct.splice(i, 1);
				}
			}
		}else{	
			price += prices[product[i]];		
		}
	};

return {price: price , countArticles : product.length, countProducts:knowProduct.length};
}


module.exports = {
	calc : calc
}