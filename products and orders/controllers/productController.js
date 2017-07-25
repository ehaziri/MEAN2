angular.module('app')
	.controller('productController', 
			['$scope', 'productFactory', 
				function($scope, productFactory) {
					$scope.products = [];

					function setProducts(){
						productFactory.getProducts(function(data){
						$scope.products = data;
					});
					}

					setProducts();

					$scope.create = function(product){
						productFactory.create(product);
						$scope.product = {};
						console.log($scope.products);
					};

					$scope.delete = function(id){
						productFactory.delete(id);
						setProducts();
					}

		}])