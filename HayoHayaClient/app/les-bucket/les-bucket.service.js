(function() {
	angular
		.module('app')
		.service('lesBucketSrv', lesBucketSrv);

	lesBucketSrv.$inject = ['$http', '$q', 'appConfiguration'];

	function lesBucketSrv($http, $q, appConfiguration) {
		return {
			getPrivateLessons: getPrivateLessons,
			getPrivateLessonsMocks: getPrivateLessonsMocks
		};

		function getPrivateLessons(bucketId, offset, length) {
			return $http.get(appConfiguration.serverUrl + '/categories/getlessons', {
				params: {
					id: bucketId,
					offset: offset,
					length: length
				}
			});
		}

		function getPrivateLessonsMocks(bucketId, offset, length) {
			var defer = $q.defer();
			defer.resolve([{
				id: 'math'
			}]);
			return defer.promise;
		}
	}
})();