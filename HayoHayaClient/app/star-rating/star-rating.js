(function () {
    angular.module('app')
        .directive('starRating', starRating);

    function starRating() {
        return {
            restrict: 'E',
            templateUrl: 'app/star-rating/star-rating.tpl.html',
            scope: {
                rating: '=',
                onRatingSelect: '&?',
                readonly: '=?'
            },
            link: function (scope, element, attributes) {
                scope.max = 5;
                scope.rating = {
                    value: 4,
                    count: 25
                };

                if (scope.isOpen == undefined) {
                    scope.isOpen = false;
                }
                scope.rating.percent = function() {
                    return Math.floor((1-scope.rating.value/scope.max)*100);
                };
                scope.toggle = function (index) {
                    if (scope.readonly == undefined || scope.readonly === false) {
                        scope.rating.value = index + 1;
                        scope.onRatingSelect({
                            'rating.value': index + 1
                        });
                    }
                };
                scope.$watch('rating.value', function (oldValue, newValue) {
                    if (newValue) {
                        updateStars();
                    }
                });

                function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.rating.value
                        });
                    }
                }
            }
        };
    }

})();