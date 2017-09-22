var meuapp = angular.module('meuapp',['ngRoute']);
meuapp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/filmes', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/filmes/create', {
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/filmes/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/filmes/:id/show', {
			templateUrl:'templates/show.html',
			controller:'empController'
		});
})