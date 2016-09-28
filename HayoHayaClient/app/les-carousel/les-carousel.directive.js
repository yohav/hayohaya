(function() {
	angular
		.module('app')
		.directive('lesCarousel', lesCarousel);

	lesCarousel.$inject = ['lesBucketSrv'];

	function lesCarousel(lesBucketSrv) {
		return {
			restrict: 'EA',
			templateUrl: 'app/les-carousel/les-carousel.tpl.html',
			replace: true,
			link: function(scope, elem, attrs) {
				scope.moveLeft = function() {
					if (scope.offset >= 3) {
						scope.offset -= 3;
					}
				};
				scope.moveRight = function() {
					if (scope.offset < scope.buckets.length - 3) {
						scope.offset += 3;
					}
				};
				scope.buckets = [];
				scope.offset = 0;
				function loadBuckets() {
					lesBucketSrv.getBuckets()
						.then(function(buckets) {
							scope.buckets = scope.buckets.concat(buckets.data);
						});
				}
				loadBuckets();
			}
		};
	}
})();