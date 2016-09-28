/**
 * Created by PC on 26/09/2016.
 */

(function () {
    angular
        .module('app')
        .directive('lesCard', lesCardDirective);

    lesCardDirective.$inject = ['lessonRegistrationService','appConfiguration'];

    function lesCardDirective(lessonRegistrationService,appConfiguration) {
        return {
            restrict: 'EA',
            scope: {
                privateLesson: '='
            },
            templateUrl: 'app/les-card/les-card.tpl.html',
            link: function (scope, element, attrs) {
                scope.registerToLesson = function (){
                    var privateLesson = scope.privateLesson;
                    lessonRegistrationService.registerToLesson(appConfiguration.userId,privateLesson._id)
                    .then(function(response){
                            var data=response.data;
                            if(data!='error'){
                                alert("registered to lesson!");
                            }
                        });
                };
            }
        }
    }
})();