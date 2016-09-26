(function() {
	angular
		.module('app')
		.controller('lesCarouselCtrl', lesCarouselCtrl);

	lesCarouselCtrl.$inject = ['$mdDialog'];

	function lesCarouselCtrl($mdDialog) {
		var vm = this;
		vm.buckets = [
			{
				id: 'Math'
			},
			{
				id: 'English'
			}
		];

		vm.createLesson=(ev)=>{
			$mdDialog.show({
				controller: 'lessonDetailsController',
				controllerAs:'vm',
				templateUrl: 'app/lesson-details/lesson-details.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: false // Only for -xs, -sm breakpoints.
			})
				.then(function(answer) {
					vm.status = 'You said the information was "' + answer + '".';
				}, function() {
					vm.status = 'You cancelled the dialog.';
				});
		};
	}
})();