/**
 * Created by lenovo on 9/25/2016.
 */
/**
 * Created by lenovo on 9/25/2016.
 */
(function(angular) {

    angular.module('app')
        .controller('worldMapController',WorldMapController);

    WorldMapController.$inject=['$scope','worldMapService'];
    function WorldMapController($scope,worldMapService)
    {
        var vm=this;
        vm.map=worldMapService.mapSettings();

        $scope.$watch('date', function (newVal,oldVal) {
            $scope.year=newVal.getFullYear();
        });

        $scope.$watch('year',function(newVal,oldVal){
            $scope.date=new Date(newVal,$scope.date.getMonth(),$scope.date.getDay());
        });
    }
})(window.angular);
