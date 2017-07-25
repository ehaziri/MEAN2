angular.module('app')
   .controller('orderController', 
   		['$scope', 'productFactory', 
   			function($scope, productFactory) {
   				$scope.products = [];

				function setProducts(){
					productFactory.getProducts(function(data){
					$scope.products = data;
			     	});
				}

				setProducts();
				$scope.buy = function(index){
					productFactory.buy(index);
					setProducts();
				};
  			   

  }]);