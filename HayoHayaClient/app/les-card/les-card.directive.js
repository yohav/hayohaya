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
            link: function (scope, elem, attrs) {
                var registerButton = angular.element(elem.querySelector('#register-to-lesson'));
                registerButton.on('click', function () {
                    alert('123');
                });
            },
            templateUrl: 'les-card.template.html'
        }
    }
})
();