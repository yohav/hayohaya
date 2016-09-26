angular
	.module('app', [
		'ngMaterial',
		'ngAnimate',
		'ui.router',
		'jkAngularCarousel',
		'schemaForm'])
	.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state("private_lessons", {
			url: "/",
			templateUrl: 'app/partial/private_lessons.html'
		});
}
