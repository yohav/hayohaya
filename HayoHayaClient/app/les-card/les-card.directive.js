/**
 * Created by PC on 26/09/2016.
 */

(function () {
    angular
        .module('app')
        .directive('lesCard', lesCardDirective);

    lesCardDirective.$inject = ['lessonRegistrationService'];

    function lesCardDirective(lessonRegistrationService) {
        return {
            restrict: 'EA',
            scope: {
                privateLesson: '='
            },
            templateUrl: 'app/les-card/les-card.tpl.html',
            link: function (scope, element, attrs) {
                scope.registerToLesson = function (){
                    var privateLesson = scope.privateLesson;
                    lessonRegistrationService.registerToLesson(privateLesson._id, privateLesson.publisher._id);
                };
            }
        }
    }
})();