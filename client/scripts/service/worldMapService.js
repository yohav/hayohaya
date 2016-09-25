
(function(angular) {

    angular.module('app')
        .service('worldMapService',WorldMapService);


    WorldMapService.$inject=["$http"];

    function WorldMapService($http)
    {
        this.getLocationDetails=  () =>{

        };
    }
})(window.angular);
