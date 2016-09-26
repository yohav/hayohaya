(function() {
	angular
		.module('app')
		.controller('lesCarouselCtrl', lesCarouselCtrl);

	lesCarouselCtrl.$inject = [];

	function lesCarouselCtrl() {
		var vm = this;
		vm.buckets = [
			{
				id: 'Math'
			},
			{
				id: 'English'
			}
		];
	}
})();