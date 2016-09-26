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
                scope.privateLesson = {
                    "_id": "57e859a46f7fbf55b7764e6e",
                    "category": "math",
                    "name": "math",
                    "publisher": {
                        "_id": "5772bb072e0bdd652c8bc7c5",
                        "name": "mahesh",
                        "password": "password1",
                        "profession": "teacher",
                        "profile": "http://assets.vg247.com/current//2014/07/assassins_creed1.jpg",
                        "points": 10,
                        "publishedLessons": [],
                        "takenLessons": []
                    },
                    "description": "vectors",
                    "pointsForCompletion": 20,
                    "hours": 5,
                    "theme": "https://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/math.jpg"
                };

                scope.registerToLesson = function (){
                    var privateLesson = scope.privateLesson;
                    lessonRegistrationService.registerToLesson(privateLesson._id, privateLesson.publisher._id);
                };
            }
        }
    }
})();