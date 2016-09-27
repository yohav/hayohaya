(function() {
    angular
        .module('app')
        .controller('addLessonDialogCtrl', addLessonDialogCtrl);

    addLessonDialogCtrl.$inject = ['$mdDialog', 'lesLessonSrv', 'bucket'];

    function addLessonDialogCtrl($mdDialog, lesLessonSrv, bucket) {
        var vm = this;
        vm.bucket = bucket;

        vm.cancel = function($event) {
            $mdDialog.cancel();
        };
        vm.finish = function($event) {
            lesLessonSrv.addLesson().then(function() {

            });
            $mdDialog.hide();
        };
    }
})();