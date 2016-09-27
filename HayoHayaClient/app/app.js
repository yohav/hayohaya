(function(){
	angular
		.module('app', [
			'ngMaterial',
			'ngAnimate',
//<<<<<<< HEAD
//			'ui.router',
//		'schemaForm',
//		'ui.bootstrap'])
//=======
			'ui.router'
		])
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/private_lessons');
		$stateProvider
			.state('app', {
				abstract: true,
				templateUrl: 'app/partials/app.html'
			})
			.state('app.private_lessons', {
				url: '/private_lessons',
				templateUrl: 'app/partials/private_lessons.html'
			});
	}
})();