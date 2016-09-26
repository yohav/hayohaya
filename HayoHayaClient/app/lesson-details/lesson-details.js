/**
 * Created by lenovo on 9/26/2016.
 */
(function() {
    angular
        .module('app').controller('lessonDetailsController', LessonDetailsController)

    LessonDetailsController.$inject = ['lessonDetailsService','userService','$mdDialog'];

    function LessonDetailsController(lessonDetailsService,userService,$mdDialog) {
        var vm = this;
        vm.lesson = {};
        vm.schema = {};
        vm.form = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];
        function init() {
            console.log('LessonDetailsController')
            userService.getUser().then(function(response){
                vm.lesson.teacher=userService.getUser();
            });
            lessonDetailsService.lessonSchema().then(function (response) {
                vm.schema = response;
            });
        }

        init();

        vm.postLesson = ()=> {
            var response=lessonDetailsService.postLesson(vm.lesson);
            $mdDialog.hide(response);
        };
    }
})();
