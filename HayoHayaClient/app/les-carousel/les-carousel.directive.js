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
					$(elem).find('.carousel-content').animate({
						left: '+=250'
					}, 1500, "easeOutBounce");
				};
				scope.moveRight = function() {
					$(elem).find('.carousel-content').animate({
						right: '+=250'
					}, 1500, "easeOutBounce");
				};
				scope.buckets = [];
				function loadBuckets() {
					lesBucketSrv.getBuckets()
						.then(function(buckets) {
							scope.buckets = scope.buckets.concat(buckets);
						});
				}
				loadBuckets();
			}
		};
	}
})();