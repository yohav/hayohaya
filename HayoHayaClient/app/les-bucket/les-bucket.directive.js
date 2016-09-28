(function() {
	angular
		.module('app')
		.directive('lesBucket', lesBucket);

	lesBucket.$inject = ['lesLessonSrv', 'bucketConfiguration', '$mdDialog'];

	function lesBucket(lesLessonSrv, bucketConfiguration, $mdDialog) {
		return {
			restrict: 'EA',
			scope: {
				bucket: '='
			},
			replace: true,
			templateUrl: 'app/les-bucket/les-bucket.tpl.html',
			link: function(scope, elem, attrs) {
				elem.scroll(function() {
					if($(this)[0].scrollHeight - $(this).scrollTop() <= $(this).outerHeight()) {
						loadPrivateLessons();
					}
				});
				scope.addLesson = function() {
					$mdDialog.show({
						controller: 'addLessonDialogCtrl',
						controllerAs: 'vm',
						templateUrl: 'app/les-bucket/add-lesson-dialog.tpl.html',
						parent: angular.element(document.body),
						clickOutsideToClose: true,
						locals: {
							bucket: scope.bucket
						}
					})
				};
				scope.offset = 0;
				scope.privateLessons = [];
				function loadPrivateLessons() {
					lesLessonSrv.getPrivateLessons(scope.bucket._id, scope.offset, bucketConfiguration.length)
						.then(function(privateLessons) {
							var lessonsData=privateLessons.data
							scope.privateLessons = scope.privateLessons.concat(lessonsData);
							scope.offset += lessonsData.length;
						});
				}
				loadPrivateLessons();
			}
		};
	}
})();