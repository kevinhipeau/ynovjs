
var expect=require('chai').expect;

let prices = {banana:1, potato:2, tomato:3, cucumber:4, salad:5, apple:6};
let products = ['tomato','cucumber','tomato','salad','potato','cucumber','potato','potato','tomato','potato'];

var calc = require("./products").calc;
describe('Hello world testing !',
	function(){

		it('should be true',function(){
			var result =calc(prices,products);

			expect(result.price).to.be.equal(25);
			expect(result.countArticles).to.be.equal(10);
			expect(result.countProducts).to.be.equal(4);

		})})