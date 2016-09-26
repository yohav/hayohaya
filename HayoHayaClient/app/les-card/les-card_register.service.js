/**
 * Created by PC on 26/09/2016.
 */

(function () {
    angular
        .module('app')
        .service('lessonRegistrationService', lessonRegistrationService);

    lessonRegistrationService.$inject = ['$http', 'appConfiguration'];

    function lessonRegistrationService($http, serverUrl) {
        return {
            registerToLesson: registerToLesson
        };

        function registerToLesson(userId, lessonId) {
            var url = serverUrl + '/takeLesson';
            var data =
            {
                userId: userId,
                lessonId: lessonId
            };
            $http.post(url, data)
        }
    }
})();