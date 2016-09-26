/**
 * Created by lenovo on 9/26/2016.
 */
(function() {
    angular
        .module('app').service('lessonDetailsService', LessonDetailsService)

    LessonDetailsService.$inject = ['$http', '$q'];

    function LessonDetailsService($http, $q) {

        this.postLesson = (lesson)=> {
            $http.post(`http://hayohaya-prod.westeurope.cloudapp.azure.com:3000/lessons`, lesson).then(function (response) {
                console.log(response);
            });
        };

        this.lessonSchema = ()=> {
            var defer = $q.defer();

            defer.resolve({
                "type": "object",
                "title": "Lesson",
                "properties": {
                    "category": {
                        "title": "Category",
                        "type": "string"
                    },
                    "name": {
                        "title": "Name",
                        "type": "string"
                    },
                    "description": {
                        "title": "Description",
                        "type": "string"
                    },
                    "price": {
                        "title": "Price",
                        "type": "number"
                    },
                    "hours": {
                        "title": "Hours",
                        "type": "number"
                    }
                }
            });
            return defer.promise;
        };

    }
})();
