meuapp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getFilmes = function(){
		$http.get('/api/filmes/').then(function(response){
			$scope.filmes = response.data;
		});
	};
	$scope.showFilme = function(){
		var id = $routeParams.id;
		$http.get('/api/filmes/'+ id).then(function(response){
			$scope.filme = response.data;
		});
	};
	$scope.addFilme  = function(){
		//var id = $routeParams.id;
		$http.post('/api/filmes/', $scope.filme).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.updateFilme  = function(){
		var id = $routeParams.id;
		$http.put('/api/filmes/'+ id , $scope.filme).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.deleteFilme  = function(id){
		var id = id;
		$http.delete('/api/filmes/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});