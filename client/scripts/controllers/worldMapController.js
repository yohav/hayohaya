/**
 * Created by lenovo on 9/25/2016.
 */
/**
 * Created by lenovo on 9/25/2016.
 */
(function(angular,google) {

    angular.module('app')
        .controller('worldMapController',WorldMapController);

    WorldMapController.$inject=['$scope','worldMapService','NgMap'];
    function WorldMapController($scope,worldMapService,NgMap)
    {
        var mapObj;
        var vm=this;
        vm.map=worldMapService.mapSettings();

        function init(){
            NgMap.getMap().then(function(evtMap) {
                mapObj = evtMap;
            });
            $scope.date=new Date(1,1,1);
        }
        init();



        $scope.$watch('date', function (newVal,oldVal) {
            $scope.year=newVal.getFullYear();
        });

        $scope.$watch('year',function(newVal,oldVal){
            var date=$scope.date;

            $scope.date=new Date(newVal,date.getMonth(),date.getDay());
        });

        vm.setCenter = function(event) {
            console.log('event', event);
            vm.marker={
                title:"yay",
                pos: [event.latLng.lat(),event.latLng.lng()]
            };

           // $scope.$digest();
        }
    }
})(window.angular,google);
