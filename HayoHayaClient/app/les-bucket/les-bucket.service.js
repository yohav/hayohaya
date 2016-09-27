(function() {
	angular
		.module('app')
		.service('lesBucketSrv', lesBucketSrv);

	lesBucketSrv.$inject = ['$http', '$q', 'appConfiguration'];

	function lesBucketSrv($http, $q, appConfiguration) {
		return {
			getBuckets: getBuckets,
			getBucketsMock: getBucketsMock
		};

		function getBuckets() {
			return $http.get(appConfiguration.serverUrl + '/categories');
		}

		function getBucketsMock() {
			var defer = $q.defer();
			defer.resolve([
				{
					id: 'Math'
				},
				{
					id: 'English'
				},
				{
					id: 'Geographical'
				},
				{
					id: 'Politics'
				},
				{
					id: 'Computer'
				},
				{
					id: 'Literature'
				}
			]);
			return defer.promise;
		}
	}
})();