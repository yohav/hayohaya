(function() {
	angular
		.module('app')
		.directive('lesBucket', lesBucket);

	lesBucket.$inject = ['lesBucketSrv', 'bucketConfiguration'];

	function lesBucket(lesBucketSrv, bucketConfiguration) {
		return {
			restrict: 'EA',
			scope: {
				bucket: '='
			},
			replace: 'true',
			templateUrl: 'app/les-bucket/les-bucket.tpl.html',
			link: function(scope, elem, attrs) {
				$(elem).scroll(function() {
					if($(this)[0].scrollHeight - $(this).scrollTop() === $(this).outerHeight()) {
						loadPrivateLessons();
					}
				});
				scope.offset = 0;
				scope.privateLessons = [];
				function loadPrivateLessons() {
					lesBucketSrv.getPrivateLessonsMocks(scope.bucket.id, scope.offset, bucketConfiguration.length)
						.then(function(privateLessons) {
							scope.privateLessons = scope.privateLessons.concat(privateLessons);
							scope.offset += privateLessons.length;
						});
				}
				loadPrivateLessons();
			}
		};
	}
})();