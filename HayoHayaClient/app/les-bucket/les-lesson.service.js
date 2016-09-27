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

		function getPrivateLessonsMock(bucketId, offset, length) {
			var defer = $q.defer();
			var lessons = {
				Math: [
					{
						_id: '1',
						category: 'Math',
						name: 'Vectors',
						teacher: {
							_id: '1',
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
						_id: '2',
						category: 'Math',
						name: 'Algebra',
						teacher: {
							_id: '1',
							name: "Roy Mor",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 3.5,
							points: 10
						},
						description: 'Lesson about algebra',
						price: 30,
						hours: 1
					},
					{
						_id: '3',
						category: 'Math',
						name: 'Sets',
						teacher: {
							_id: '1',
							name: "Roy Mor",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 3.5,
							points: 10
						},
						description: 'Lesson about sets',
						price: 20,
						hours: 2
					},
					{
						_id: '4',
						category: 'Math',
						name: 'Graphs',
						teacher: {
							_id: '1',
							name: "Roy Mor",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 3.5,
							points: 10
						},
						description: 'Lesson about graphs',
						price: 55,
						hours: 3.5
					}
				],
				English: [
					{
						_id: '5',
						category: 'English',
						name: 'Teach ABC',
						teacher: {
							_id: '2',
							name: "Itai Sinai",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 5,
							points: 5
						},
						description: 'Lesson about the abc',
						price: 35,
						hours: 2
					}
				],
				Geographical: [
					{
						_id: '6',
						category: 'Geographical',
						name: 'Israel country',
						teacher: {
							_id: '3',
							name: "Ori Gilad",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 4.5,
							points: 28
						},
						description: 'Lesson about Israel',
						price: 80,
						hours: 3
					}
				],
				Politics: [
					{
						_id: '7',
						category: 'Politics',
						name: 'Benjamin Netanyahu',
						teacher: {
							_id: '4',
							name: "Meir Blechman",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 5,
							points: 100
						},
						description: 'Lesson about Benjamin Netanyahu',
						price: 20,
						hours: 5
					}
				],
				Computer: [
					{
						_id: '8',
						category: 'Computer',
						name: 'C#',
						teacher: {
							_id: '1',
							name: "Roy Mor",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 3.5,
							points: 10
						},
						description: 'Lesson about C# classes',
						price: 80,
						hours: 2
					}
				],
				Literature: [
					{
						_id: '9',
						category: 'Literature',
						name: 'Past Sentence',
						teacher: {
							_id: '5',
							name: "Daniel Edri",
							picture: "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
							stars: 0.5,
							points: 10
						},
						description: 'Lesson about past sentence',
						price: 20,
						hours: 5
					}
				]
			};
			defer.resolve(lessons[bucketId]);
			return defer.promise;
		}
	}
})();