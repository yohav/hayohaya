(function() {
	angular
		.module('app')
		.service('lesLessonSrv', lesLessonSrv);

	lesLessonSrv.$inject = ['$http', '$q', 'appConfiguration'];

	function lesLessonSrv($http, $q, appConfiguration) {
		return {
			getPrivateLessons: getPrivateLessons,
			getPrivateLessonsMock: getPrivateLessonsMock
		};

		function getPrivateLessons(bucketId, offset, length) {
			return $http.get(appConfiguration.serverUrl + '/categories/getLessons/' + bucketId + '/' + offset + '/' + length);
		}

		function getPrivateLessonsMock() {
			var defer = $q.defer();
			defer.resolve([
				{
					_id: '57e859a46f7fbf55b7764e6e',
					category: 'Math',
					name: 'Vectors',
					teacher: {
						_id: '5772bb072e0bdd652c8bc7c5',
						name: "Roy Mor",
						picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
						stars: 3.5,
						points: 10
					},
					description: 'Lesson about vector',
					price: 20,
					hours: 5
				},
				{
					_id: '57e859a46f7fbf55b7764e6e',
					category: 'Math',
					name: 'Vectors',
					teacher: {
						_id: '5772bb072e0bdd652c8bc7c5',
						name: "Roy Mor",
						picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
						stars: 3.5,
						points: 10
					},
					description: 'Lesson about vector',
					price: 20,
					hours: 5
				},
				{
					_id: '57e859a46f7fbf55b7764e6e',
					category: 'Math',
					name: 'Vectors',
					teacher: {
						_id: '5772bb072e0bdd652c8bc7c5',
						name: "Roy Mor",
						picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
						stars: 3.5,
						points: 10
					},
					description: 'Lesson about vector',
					price: 20,
					hours: 5
				},
				{
					_id: '57e859a46f7fbf55b7764e6e',
					category: 'Math',
					name: 'Vectors',
					teacher: {
						_id: '5772bb072e0bdd652c8bc7c5',
						name: "Roy Mor",
						picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
						stars: 3.5,
						points: 10
					},
					description: 'Lesson about vector',
					price: 20,
					hours: 5
				},
				{
					_id: '57e859a36f7fbf55b7764e6e',
					category: 'English',
					name: 'abc..',
					teacher: {
						_id: '5772b3072e0bdd652c8bc7c5',
						name: "Itai Sinai",
						picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
						stars: 5,
						points: 5
					},
					description: 'Lesson about the abc',
					price: 35,
					hours: 2
				}
			]);
			return defer.promise;
		}
	}
})();