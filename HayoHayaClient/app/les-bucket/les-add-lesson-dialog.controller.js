(function() {
    angular
        .module('app')
        .controller('addLessonDialogCtrl', addLessonDialogCtrl);

    addLessonDialogCtrl.$inject = ['$mdDialog', 'lesLessonSrv', 'bucket','appConfiguration'];

    function addLessonDialogCtrl($mdDialog, lesLessonSrv, bucket,appConfiguration) {
        var vm = this;
        vm.bucket = bucket;
        vm.lesson={
            teacher:appConfiguration.userId,
            category:bucket.name
        };
        vm.cancel = function($event) {
            $mdDialog.cancel();
        };
        vm.finish = function($event) {
            lesLessonSrv.addLesson(vm.lesson).then(function(response) {
                    console.log(response);
            });
            $mdDialog.hide();
        };
    }
})();