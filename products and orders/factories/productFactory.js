angular.module('app')
	.factory('productFactory', function(){
			var factory = {};

			var products = [];
			
			factory.getProducts = function(callback){
				callback(products);
			}
			factory.create = function(product){
				product.quantity = 50;
				products.push(product);
			}
			factory.delete = function(id){
				products.splice(id, 1);
			}

			factory.buy = function(id){
				if(products[id].quantity > 0){
					products[id].quantity--;
				}
			}

			return factory;
		});