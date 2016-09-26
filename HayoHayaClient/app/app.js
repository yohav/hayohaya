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
	$stateProvider
		.state('private_lessons',{
			views: {
				'private_lessons': {
					templateUrl: 'private_lessons.html',
					controller: '..'
				}
			}
		})
}
